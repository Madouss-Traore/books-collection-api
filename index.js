import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Server listening at http://localhost:${port}`);
});