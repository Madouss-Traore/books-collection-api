import "dotenv/config";
import express from "express";
import { sequelize } from "./models/sequelize.client.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


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
