import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class BookGenre extends Model {}

BookGenre.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "book_genre",
    timestamps: false
  }
);
