BEGIN;

-- table books

INSERT INTO "book"
  ("id", "title", "author", "description")
VALUES
  (1, 'Origine', 'Dan Brown', 'Thriller scientifique et ésotérique avec Robert Langdon, en Espagne.'),
  (2, 'L''Hibiscus pourpre', 'Chimamanda Ngozi Adichie', 'Roman sur une famille nigériane entre religion, autorité et liberté.'),
  (3, 'Demain', 'Guillaume Musso', 'Histoire d''amour et de mystère entre New York et Boston.'),
  (4, 'La femme de ménage', 'Freida McFadden', 'Thriller psychologique captivant sur les secrets d''une maison parfaite.'),
  (5, 'Le Symbole perdu', 'Dan Brown', 'Nouvelle enquête de Robert Langdon à Washington mêlant franc-maçonnerie et symbolisme.');

SELECT setval('book_id_seq', (SELECT MAX(id) FROM "book"));

-- table genres

INSERT INTO "genre"
  ("id", "name")
VALUES
  (1, 'Thriller'),
  (2, 'Policier'),
  (3, 'Ésotérique'),
  (4, 'Roman'),
  (5, 'Drame'),
  (6, 'Littérature africaine'),
  (7, 'Romance'),
  (8, 'Psychologique'),
  (9, 'Mystère'),
  (10, 'Suspense');

SELECT setval('genre_id_seq', (SELECT MAX(id) FROM "genre"));

-- TABLE book_genre (liaisons livres ↔ genres)

INSERT INTO "book_genre"
  ("book_id", "genre_id")
VALUES
  (1, 1), 
  (1, 2), 
  (1, 3), 

  (2, 4), 
  (2, 5), 
  (2, 6), 

  (3, 4), 
  (3, 7), 
  (3, 8), 

  (4, 1), 
  (4, 8), 
  (4, 10), 

  (5, 1), 
  (5, 3), 
  (5, 9); 

COMMIT;
