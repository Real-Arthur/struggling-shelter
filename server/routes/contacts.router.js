const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// gets everyone who hasn't been contacted yet
router.get('/', (req, res) => {
  const queryString = 
    `SELECT 
      "people"."id",
      "people"."first_name", 
      "people"."last_name", 
      "people"."email",
      "people"."phone_number",
      to_char("people"."interested_on", 'MONTHDD, YYYY') AS "interested_on",
      "animals"."name", 
      "animals"."animal_type", 
      "animals"."breed", 
      "animals"."price",
      "animals"."picture" 
    FROM "people"
    JOIN "animals"
      ON "people"."interested_in" = "animals"."id"
    WHERE "people"."contacted" = false
      ORDER BY "interested_on" ASC;`;
  pool.query(queryString)
    .then(response => {
      res.send(response.rows);
    })
    .catch(error => {
      console.log('error in contacts.router.js GET', error);
      res.status(500);
    });
});
router.put('/', (req, res) => {
  let contactToUpdate = req.body.id;
  const queryString = 
  `UPDATE "people"
    SET "contacted" = true
    WHERE "people"."id" = $1;
  `;
  pool.query(queryString, [contactToUpdate])
  .then(response => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error in contacts.router.js PUT', error);
    res.status(500);
  });
});
router.post('/', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let address = req.body.address;
  let occupation = req.body.occupation;
  let typeOfHome = req.body.typeOfHome;
  let interestedIn = req.body.interestedIn;
  const queryString = 
    `INSERT INTO "people" 
    ("first_name", 
    "last_name", 
    "email",
    "phone_number",
    "date_of_birth", 
    "address", 
    "occupation", 
    "type_of_home", 
    "interested_in",
    "interested_on")
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, current_date);`;
  pool.query(queryString, [firstName, lastName, email, phoneNumber, dob, address, occupation, typeOfHome, interestedIn])
  .then(response => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error in interested.router.js POST', error);
    res.send(500);
  });
});
module.exports = router;