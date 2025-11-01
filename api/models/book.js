import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    tableName: "book",
    timestamps: false
  }
);
