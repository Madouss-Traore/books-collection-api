import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.PG_URL, 
  {
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

try {
  await sequelize.authenticate();
  console.log("✅ Connexion PostgreSQL réussie !");
} catch (error) {
  console.error("❌ Erreur de connexion :", error);
}
