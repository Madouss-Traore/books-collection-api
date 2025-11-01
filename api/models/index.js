import  Book  from "./book.js";
import  Genre from "./genre.js";
import  BookGenre  from "./bookGenre.js";
import { sequelize } from "./sequelize.client.js";

Book.belongsToMany(Genre, {
  through: BookGenre,
  foreignKey: "book_id",
  otherKey: "genre_id",
  as: "genres"
});

Genre.belongsToMany(Book, {
  through: BookGenre,
  foreignKey: "genre_id",
  otherKey: "book_id",
  as: "books"
});

export { Book, Genre, BookGenre, sequelize };


