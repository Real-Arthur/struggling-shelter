CREATE TYPE admin_level AS ENUM ('Admin', 'Staff', 'Volunteer');
CREATE TYPE size AS ENUM ('Small', 'Medium', 'Large');
CREATE TYPE animal_type AS ENUM ('Cat', 'Dog', 'Rabbit', 'Snake', 'Hamster', 'Mouse', 'Pig', 'Other');
CREATE TYPE sex AS ENUM ('Male', 'Female', 'Unknown');

-- We can create our user table
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR,
  "password" VARCHAR,
	"admin_level" admin_level DEFAULT 'Staff'
);
-- We can create our animals table
CREATE TABLE "animals" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
	"animal_type" animal_type NOT NULL,
	"breed" VARCHAR,
	"color" VARCHAR,
	"coat_length" VARCHAR,
	"age" VARCHAR,
	"sex" sex,
	"size" size,
	"house_trained" BOOLEAN,
	"vaccinated" BOOLEAN,
	"neutered" BOOLEAN,
	"personality" VARCHAR,
	"price" INT,
	"picture" VARCHAR,
	"adopted" BOOLEAN DEFAULT false
);
-- we can create our people table
CREATE TABLE "people" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR NOT NULL,
	"last_name" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL,
	"phone_number" VARCHAR NOT NULL,
	"date_of_birth" DATE NOT NULL,
	"address" VARCHAR NOT NULL,
	"occupation" VARCHAR,
	"type_of_home" VARCHAR,
	"interested_in" INT REFERENCES animals,
	"interested_on" TIMESTAMP,
	"contacted" BOOLEAN DEFAULT false,
	"adoption_success" BOOLEAN DEFAULT false
);
--- Fake animal data
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Jimmy', 'Dog', 'Australian Terrier', 'Brown', 'Long hair', 'Four Months', 'Male', 'Small', FALSE, TRUE, FALSE, 'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous', 2000, 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Luis', 'Dog', 'Greyhound', 'Brown', 'Short hair', 'Two Years', 'Male', 'Large', TRUE, TRUE, TRUE, 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered', 5000, 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Emma', 'Dog', 'American Bulldog"', 'Brown with white parts', 'Short hair', 'Nine Months', 'Female', 'Medium', FALSE, FALSE, FALSE, 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant', 2000, 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Ryan', 'Dog', 'Akita', 'Brown with white parts', 'Medium hair', 'Three Years', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous', 1000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Linus', 'Cat', 'Australian Mist', 'Light brown with light black stripes', 'Short hair', 'Six Months', 'Male', 'Medium', FALSE, TRUE, FALSE, 'Lively, Social, Fun-loving, Relaxed, Affectionate', 4000, 'https://cdn2.thecatapi.com/images/7-1CtKMRr.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Phil', 'Cat', 'Abyssian', 'Orange with brown stripes', 'Short hair', 'Six Months', 'Male', 'Medium', TRUE, TRUE, TRUE, 'Active, Energetic, Independent, Intelligent, Gentle', 5000, 'https://cdn2.thedogapi.com/images/H6UCIZJsc.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Paul', 'Cat', 'Munchkin', 'Brown with black stripes and a white belly', 'Medium hair', 'Three Years', 'Male', 'Small', TRUE, FALSE, TRUE, 'Agile, Easy Going, Intelligent, Playful', 2000, 'https://cdn2.thecatapi.com/images/ilQzcQdl7.jpg');
INSERT INTO "animals" ("name", "animal_type", "breed", "color", "coat_length", "age", "sex", "size", "house_trained", "vaccinated", "neutered", "personality", "price", "picture")
VALUES
('Tony', 'Cat', 'Siberian', 'Dust brown with black accentws', 'Long hair', 'Four Months', 'Female', 'Small', TRUE, TRUE, TRUE, 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate', 500, 'https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1');
--- Fake interested people
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('James', 'Richardson', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 1, '2020-01-28');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Sara', 'Samuels', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 2, '2020-02-01');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Evelyn', 'Wellington', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 3, '2020-02-02');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Paul', 'Larson', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 4, '2020-01-20');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Chase', 'Crawford', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 1, '2020-01-08');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Singh', 'Patel', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 5, '2020-01-11');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Xiu', 'La', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 6, '2020-02-01');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Oly', 'Mann', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 2, '2020-02-02');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Mark', 'Jackson', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 3, '2020-02-01');
INSERT INTO "people" ("first_name", "last_name", "email", "phone_number", "date_of_birth", "address", "occupation", "type_of_home", "interested_in", "interested_on")
VALUES
('Ursula', 'Peters', 'a@gmail.com', '4144003449', '11-19-1988', '123 Fake Street, Fakesville, Fake', 'Surfer', 'House', 4, '2020-02-01');