import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const Product = sequelize.define(
    "product" , 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    })
    // Product.sync()

export default Product