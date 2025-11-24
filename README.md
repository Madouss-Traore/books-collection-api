# 📘 Books Collection API

API REST construite avec **Node.js**, **Express** et **Sequelize**, permettant de gérer une collection de **livres** et leurs **genres** dans une relation **Many-to-Many (N↔N)**.

Elle offre des routes pour consulter, ajouter, modifier et supprimer des livres et des genres, avec une architecture claire et évolutive.

---

# 🚀 Démarrer le projet

## 1️⃣ Installation

Clonez le dépôt puis installez les dépendances :

```bash
git clone git@github.com:Madouss-Traore/books-collection-api.git
cd books-collection-api/api
npm install
```

###  Configuration

Créez un fichier `.env` dans le dossier /api en vous basant sur `.env.example` :

```env
PORT=3000

DB_NAME=books
DB_USER=madtae
DB_PASSWORD=ton_mot_de_passe
DB_HOST=localhost
DB_DIALECT=postgres
```


###  Base de données

Initialisez la base avec les scripts SQL fournis :

```bash
npm run db:create
npm run db:seed
```


Ou directement :

```bash
npm run db:reset
```

###  Lancer le serveur

```bash
npm run dev
```


Le serveur démarre sur `http://localhost:3000`

Un message de confirmation s’affichera dans la console :

✅ Connexion PostgreSQL réussie !
🚀 Server running at http://localhost:3000



---

## Endpoints (aperçu)

### Books

| Méthode | Route      | Description            |
|---------|------------|-----------------------|
| GET     | /books     | Liste tous les livres   |
| GET     | /books/:id | Détail d’un livre      |

### Genres

| Méthode | Route         | Description                             |
|---------|---------------|-----------------------------------------|
| GET     | /genres       | Liste tous les genres                   |
| GET     | /genres/:id   | Détail d’un genre (inclut ses livres)   |
| POST    | /genres       | Crée un genre                           |
| PUT     | /genres/:id   | Met à jour un genre                     |
| DELETE  | /genres/:id   | Supprime un genre                       |

---

##  Scripts disponibles

| Commande          | Description                   |
|-------------------|-------------------------------|
| npm start         | Lance le serveur en production |
| npm run dev       | Lance le serveur en mode développement  |
| npm run db:create | Crée les tables via SQL        |
| npm run db:seed   | Ajoute les données initiales   |
| npm run db:reset  | Réinitialise la base (create + seed) |

---

##  Structure du projet

- controllers/ → logique métier (Books, Genres)

- data/ → scripts SQL de création et seed

- models/ → modèles Sequelize (Book, Genre, association)

- routers/ → routes Express

- index.js → point d’entrée de l’application

- .env.example → exemple de configuration d’environnement

---

## 🚧 Ce projet **continuera d’être amélioré au fil du temps.**
