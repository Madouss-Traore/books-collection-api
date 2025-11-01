# Books Collection API  (Projet personnel d’apprentissage)


Ce projet est une **API REST** développée avec **Node.js**, **Express** et **Sequelize**.  
Elle permet de gérer une collection de **livres** et leurs **genres** (relation N↔N).  
Les routes permettent de **consulter**, **ajouter** et **supprimer** des éléments, avec une structure claire et évolutive.

---

## 🚀 Démarrer le projet

###  Installation

Clonez le dépôt et installez les dépendances :

git clone git@github.com:<votre-utilisateur>/<votre-repo>.git
cd books-collection-api
npm install



###  Configuration

Créez un fichier `.env` à la racine du projet en vous basant sur `.env.example` :

PORT=3000
PG_URL=postgres://<user>:<password>@localhost:5432/books



###  Base de données

Initialisez la base avec les scripts SQL fournis :

npm run db:create
npm run db:seed



Ou directement :

npm run db:reset


###  Lancer le serveur

npm run dev



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
| npm run dev       | Lance le serveur avec nodemon  |
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
