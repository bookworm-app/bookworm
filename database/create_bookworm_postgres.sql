SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.reading_lists (
	"_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"book_id" serial NOT NULL,
	"status_id" serial NOT NULL,
	"recommend" BOOLEAN,
	"review" varchar,
	CONSTRAINT "reading_lists_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.books (
	"_id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"genre_id" serial,
	CONSTRAINT "books_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.read_statuses (
	"_id" serial NOT NULL,
	"status" varchar(255) NOT NULL,
	CONSTRAINT "read_statuses_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.genres (
	"_id" serial NOT NULL,
	"genre" varchar(255),
	CONSTRAINT "genres_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE public.reading_lists ADD CONSTRAINT "reading_lists_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");
ALTER TABLE public.reading_lists ADD CONSTRAINT "reading_lists_fk1" FOREIGN KEY ("book_id") REFERENCES public.books("_id");
ALTER TABLE public.reading_lists ADD CONSTRAINT "reading_lists_fk2" FOREIGN KEY ("status_id") REFERENCES public.read_statuses("_id");

ALTER TABLE public.books ADD CONSTRAINT "books_fk0" FOREIGN KEY ("genre_id") REFERENCES public.genres("_id");


INSERT INTO public.users VALUES (1, 'carlyy', 'password', 'Carly', 'Yarnell');
INSERT INTO public.users VALUES (2, 'stevej', 'password', 'Steve', 'Jue');
INSERT INTO public.users VALUES (3, 'johnh', 'password', 'John', 'Howell');
INSERT INTO public.users VALUES (4, 'jonahe', 'password', 'Jonah', 'Eidman');
INSERT INTO public.users VALUES (5, 'bookworm4', 'password', 'Randy', 'Reader');
INSERT INTO public.users VALUES (6, 'realperson20', 'password', 'Not', 'Bot');
INSERT INTO public.users VALUES (7, 'iheartreading55', 'password', 'Bill', 'Books');
INSERT INTO public.users VALUES (8, 'janed', 'password', 'Jane', 'Doe');

INSERT INTO public.read_statuses VALUES (1, 'past');
INSERT INTO public.read_statuses VALUES (2, 'present');
INSERT INTO public.read_statuses VALUES (3, 'future');

INSERT INTO public.genres VALUES (1, 'Classic');
INSERT INTO public.genres VALUES (2, 'Comedy');
INSERT INTO public.genres VALUES (3, 'Mystery');
INSERT INTO public.genres VALUES (4, 'Scifi/Fantasy');
INSERT INTO public.genres VALUES (5, 'Historical');
INSERT INTO public.genres VALUES (6, 'Horror');
INSERT INTO public.genres VALUES (7, 'Romance');
INSERT INTO public.genres VALUES (8, 'Western');
INSERT INTO public.genres VALUES (9, 'Politics');
INSERT INTO public.genres VALUES (10, 'Fiction');
INSERT INTO public.genres VALUES (11, 'Non-Fiction');
INSERT INTO public.genres VALUES (12, 'Children');
INSERT INTO public.genres VALUES (13, 'Other');

INSERT INTO public.books VALUES(1, 'East of Eden', 'John Steinbeck', 1);
INSERT INTO public.books VALUES(2, 'Dune', 'Frank Herbert', 4);
INSERT INTO public.books VALUES(3, 'Midnight in Chernobyl', 'Adam Higgenbotham', 11);
INSERT INTO public.books VALUES(4, 'The Metamorphasis', 'Franz Kafka', 1);
INSERT INTO public.books VALUES(5, 'Harry Potter and the Deathly Hallows', 'JK Rowling', 4);
INSERT INTO public.books VALUES(6, 'Harry Potter and the Half Blood Prince', 'JK Rowling', 4);
INSERT INTO public.books VALUES(7, 'The Hunger Games', 'Suzanne Collins', 4);
INSERT INTO public.books VALUES(8, 'Little Women', 'Louisa May Alcott', 1);
INSERT INTO public.books VALUES(9, 'No Country for Old Men', 'Cormac McCarthy', 8);
INSERT INTO public.books VALUES(10, 'Crime and Punishment', 'Fyodor Dostoevsky', 1);
INSERT INTO public.books VALUES(11, 'The Very Hungry Caterpillar', 'Eric Carle', 12);

INSERT INTO public.reading_lists VALUES(1, 1, 5, 1, TRUE, 'Amazing Book!');
INSERT INTO public.reading_lists VALUES(2, 1, 6, 1, TRUE, 'Blew my Mind!');
INSERT INTO public.reading_lists VALUES(3, 1, 7, 2, FALSE, NULL);
INSERT INTO public.reading_lists VALUES(4, 1, 1, 3, FALSE, NULL);
INSERT INTO public.reading_lists VALUES(5, 2, 11, 2, NULL, NULL);
INSERT INTO public.reading_lists VALUES(6, 2, 9, 1, FALSE, 'Fundamentally changed my view of the world');
INSERT INTO public.reading_lists VALUES(7, 2, 5, 1, NULL, NULL);
INSERT INTO public.reading_lists VALUES(8, 3, 4, 3, FALSE, NULL);
INSERT INTO public.reading_lists VALUES(9, 3, 3, 2, NULL, NULL);
INSERT INTO public.reading_lists VALUES(10, 4, 3, 1, TRUE, 'Thrilling!');
INSERT INTO public.reading_lists VALUES(11, 4, 2, 3, TRUE, NULL);
INSERT INTO public.reading_lists VALUES(12, 6, 1, 2, TRUE, NULL);
INSERT INTO public.reading_lists VALUES(13, 8, 7, 1, FALSE, 'This book was a real bummer :(');
INSERT INTO public.reading_lists VALUES(14, 5, 8, 3, TRUE, NULL);
INSERT INTO public.reading_lists VALUES(15, 7, 7, 2, FALSE, NULL);
INSERT INTO public.reading_lists VALUES(16, 7, 10, 1, TRUE, 'I LOVED this book!');

-- postgres://dkkcsyzq:kmL7sCZe-lVTlpTeLLWeGMTfmUQK8ejp@batyr.db.elephantsql.com/dkkcsyzq

--past current future