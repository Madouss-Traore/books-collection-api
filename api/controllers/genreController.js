import { Genre } from "../models/index.js";
import { StatusCodes } from "http-status-codes";

export async function getAllGenres(_req, res) {
  const genres = await Genre.findAll();
  return res.json(genres);
}

export async function getGenreById(req, res) {
  const genre = await Genre.findByPk(req.params.id, { include: "books" });
  if (!genre) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "Genre not found" });
  }
  return res.json(genre);
}

export async function deleteGenreById(req, res) {
  const deleted = await Genre.destroy({ where: { id: req.params.id } });
  if (!deleted) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "Genre not found" });
  }
  res.status(StatusCodes.NO_CONTENT).end();
}

export async function createGenre(req, res) {
  const genre = await Genre.create(req.body);
  return res.status(StatusCodes.CREATED).json(genre);
}

export async function updateGenre(req, res) {
  const genre = await Genre.findByPk(req.params.id);
  if (!genre) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "Genre not found" });
  }
  await genre.update(req.body);
  return res.json(genre);
}

export const genreController = {
  getAllGenres,
  getGenreById,
  deleteGenreById,
  createGenre,
  updateGenre,
};
