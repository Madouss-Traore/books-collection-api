import { Router } from "express";
import { genreController } from "../controllers/genreController.js";

export const router = Router();

// Tous les genres
router.get("/", genreController.getAllGenres);

// Récupérer un genre par son ID (avec ses livres)
router.get("/:id", genreController.getGenreById);

// Supprimer un genre
router.delete("/:id", genreController.deleteGenreById);

// Créer un nouveau genre
router.post("/", genreController.createGenre);

// Maj un genre
router.put("/:id", genreController.updateGenre);
