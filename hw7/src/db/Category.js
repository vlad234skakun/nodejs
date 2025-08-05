import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Category = sequelize.define(
    "category" ,
    {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [2, 20],
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
    }
);

  // Category.sync() // 

export default Category;