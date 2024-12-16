import Product from "../models/product.js";
import productRepository from "../repositories/productRepository.js";

export const getProductById = (req, res) => {
    const { id } = req.params;

    const product = productRepository.getById(Number(id));

    if (!product) {
        return res.status(404).json({ error: 'Product not found!' });
    }

    res.json(product)
};

export const listProducts = (req, res) => {
    const {category, page = 1, limit = 10} = req.query;

    let products = productRepository.getAll();

    if (category) {
        products = products.filter(product => 
            product.getCategory().toLowerCase() === category.toLowerCase());
    }

    const start = (page - 1) * limit;
    const paginatedProducts = products.slice(start, start + parseInt(limit));

    res.json({ total: products.length, page, limit, data: paginatedProducts });
};

