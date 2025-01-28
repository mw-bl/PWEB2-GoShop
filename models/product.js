'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL[10, 2],
            allowNull: false,
        },
    });

    Product.associate = (models) => {
        Product.belongsTp(models.Product, {
            foreignKey: 'categoryId'
        });
    };

    return Product;
};

