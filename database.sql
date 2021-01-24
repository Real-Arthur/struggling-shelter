CREATE TYPE size AS ENUM ('Small', 'Medium', 'Large');
CREATE TYPE admin_level AS ENUM ('Admin', 'Staff', 'Volunteer');
CREATE TYPE animal_type AS ENUM ('Cat', 'Dog', 'Rabbit', 'Snake', 'Hamster', 'Mouse', 'Pig', 'Other');
CREATE TYPE sex AS ENUM ('Male', 'Female', 'Unknown');

CREATE TABLE "animals" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (128) NOT NULL,
	"animal_type" animal_type NOT NULL,
	"breed" VARCHAR (64),
	"color" VARCHAR (64),
	"coat_length" VARCHAR (16),
	"age" VARCHAR (16),
	"sex" sex,
	"size" size,
	"house_trained" BOOLEAN,
	"vaccinated" BOOLEAN,
	"neutered" BOOLEAN,
	"personality" VARCHAR (8192),
	"price" INT,
	"picture" VARCHAR (8192),
	"adopted" BOOLEAN DEFAULT false
);
CREATE TABLE "people" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (64) NOT NULL,
	"last_name" VARCHAR (64) NOT NULL,
	"email" VARCHAR (128) NOT NULL,
	"password" VARCHAR (2048) NOT NULL,
	"date_of_birth" DATE NOT NULL,
	"address" VARCHAR (256) NOT NULL,
	"occupation" VARCHAR (64),
	"type_of_home" VARCHAR (16),
	"contacted" BOOLEAN DEFAULT false
);
CREATE TABLE "staff" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (64) NOT NULL,
	"last_name" VARCHAR (64) NOT NULL,
	"password" VARCHAR (2048) NOT NULL,
	"admin_level" admin_level NOT NULL
);
CREATE TABLE "people_interested" (
	"id" SERIAL PRIMARY KEY,
	"people_id" INT REFERENCES "people",
	"pet_id" INT REFERENCES "animals",
	"followed_up_with" BOOLEAN DEFAULT false,
	"adoption_success" BOOLEAN DEFAULT false
);
CREATE TABLE "people" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (64) NOT NULL,
	"last_name" VARCHAR (64) NOT NULL,
	"email" VARCHAR (128) NOT NULL,
	"password" VARCHAR (2048) NOT NULL,
	"date_of_birth" DATE NOT NULL,
	"address" VARCHAR (256) NOT NULL,
	"occupation" VARCHAR (64),
	"type_of_home" VARCHAR (16),
	"contacted" BOOLEAN DEFAULT false
);
CREATE TABLE "staff" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (64) NOT NULL,
	"last_name" VARCHAR (64) NOT NULL,
	"password" VARCHAR (2048) NOT NULL,
	"admin_level" admin_level NOT NULL
);


INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luca', 'Dog', 'Italian Greyhound', 'Silver with white parts', 'Short hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Annoying', 2000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Pug', 'Brown with white parts', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Chill', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'Cockerspaniel', 'Brown with white parts', 'Long hair', 'Eight Months', 'Female', 'Small', FALSE, FALSE, FALSE, 'Wild', 2000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');


INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Cat', 'Tabbie', 'Orange with white parts', 'Long hair', 'One Month', 'Male', 'Small', TRUE, TRUE, TRUE, 'A cat', 1000, 'https://cdn2.thecatapi.com/images/6nn.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Sphinx', 'Grey', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Not great', 4000, 'https://cdn2.thecatapi.com/images/6nn.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Rabbit', 'Rabbit', 'Brown with white parts', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Chill', 5000, 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555922464/shape/mentalfloss/istock_000011513454_small.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Rabbit', 'Rabbit', 'Brown with white parts', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, FALSE, TRUE, 'Chill', 2000, 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555922464/shape/mentalfloss/istock_000011513454_small.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Snake', 'Pug', 'Brown with white parts', 'Short hair', 'Six Months', 'Male', 'Large', TRUE, TRUE, TRUE, 'Chill', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Lisa', 'Snake', 'Pug', 'Brown with white parts', 'Short hair', 'Six Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Chill', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');


-------------
-- Test data
INSERT INTO "people" ("first_name", "last_name", "email", "password", "date_of_birth", "address", "occupation", "type_of_home")
VALUES
('Eleanor', 'Johnson', 'rthrcrsn@gmail.com', '12345', '11-19-1988', '123 Fake Street', 'Software Engineer', 'Apartment');

INSERT INTO "staff" ("first_name", "last_name", "password", "admin_level")
VALUES
('Fake', 'Admin', '12345', 'Admin');

INSERT INTO "interest" ("people_id", "pet_type", "pet_id")
VALUES
(2, 'Cat', 2);
-------------
-- Test queries
SELECT * FROM "interest"
JOIN "people" ON "people"."id" = "interest"."people_id"
JOIN "dog" ON "dog"."id" = "interest"."pet_id"
WHERE "people"."id" = 1;

SELECT * FROM "animals"
WHERE "animal_type" = 'Cat';