import { Genre } from "../models/index.js";
import { StatusCodes } from "http-status-codes";

// Lister tous les genres
export async function getAllGenres(_req, res) {
  const genres = await Genre.findAll();
  return res.json(genres);
}

// Voir les livres d'un genre
export async function getBooksByGenre(req, res) {
  const genre = await Genre.findByPk(req.params.id, { include: "books" });

  if (!genre) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "Genre not found" });
  }

  return res.json(genre.books);
}

export const genreController = { getAllGenres, getBooksByGenre };
