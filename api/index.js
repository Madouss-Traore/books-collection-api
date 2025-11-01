import "dotenv/config";
import express from "express";
import { sequelize } from "./models/sequelize.client.js";
import { router as bookRouter } from "./routers/book.router.js";
import { router as genreRouter } from "./routers/genre.router.js";



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/books", bookRouter);
app.use("/genres", genreRouter);


app.get("/", (_req, res) => {
  res.json({ message: "API Books - Hello World!" });
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion PostgreSQL réussie !");
    

    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Erreur lors du démarrage du serveur :", err);
  }
}

startServer();
