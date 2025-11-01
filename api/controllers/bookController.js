import { Book } from "../models/index.js";
import { StatusCodes } from "http-status-codes";

// récupérer tous les livres
export async function getAllBooks(_req, res) {
  const books = await Book.findAll(); 
  return res.json(books);
}

// récupérer un livre par son id
export async function getBookById(req, res) {
  const book = await Book.findByPk(req.params.id);

  if (!book) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: "Book not found" });
  }

  return res.json(book);
}

export const bookController = { getAllBooks, getBookById };
