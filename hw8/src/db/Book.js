import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Book = sequelize.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Книга с таким названием уже существует",
    },
    validate: {
      notEmpty: {
        args: true,
        msg: "Название книги не может быть пустым",
      },
    },
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Автор не может быть пустым",
      },
    },
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        args: true,
        msg: "Год должен быть числом",
      },
      min: {
        args: 1000,
        msg: "Год должен быть больше 1000",
      },
      max: {
        args: new Date().getFullYear(),
        msg: "Год не может быть в будущем",
      },
    },
  },
});

// Book.sync() // включи при необходимости

export default Book;
