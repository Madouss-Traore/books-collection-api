import { Router } from "express";
import { bookController } from "../controllers/bookController.js";

export const router = Router();

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
