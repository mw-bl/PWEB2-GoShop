import Product from "../models/product.js";
import productRepository from "../repositories/productRepository.js";

export const getProductById = (req, res) => {
    const { id } = req.params;

    const product = productRepository.getById(Number(id));

    if (!product) {
        return res.status(404).json({ error: 'Product not found!' });
    }

    res.json(product)
}