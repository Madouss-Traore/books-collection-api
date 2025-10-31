
// models/sequelize.client.js
import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  },
  logging: false
});

try {
  await sequelize.authenticate();
  console.log("✅ Connexion PostgreSQL réussie !");
} catch (error) {
  console.error("❌ Erreur de connexion :", error);
}
