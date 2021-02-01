const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// gets everyone who hasn't been contacted yet
router.get('/', (req, res) => {
  console.log('contacts get');
  const queryString = 
    `SELECT 
      "people"."id",
      "people"."first_name", 
      "people"."last_name", 
      "people"."email", 
      "people"."adoption_success", 
      "people"."contacted", 
      "animals"."name", 
      "animals"."animal_type", 
      "animals"."breed", 
      "animals"."price",
      "animals"."picture" 
    FROM "people"
    JOIN "animals"
      ON "people"."interested_in" = "animals"."id"
    WHERE "people"."contacted" = false;`;
  pool.query(queryString)
    .then(response => {
      console.log('response', response);
      res.send(response.rows);
    })
    .catch(error => {
      console.log('error in contacts.router.js GET', error);
      res.status(500);
    });
});
router.put('/', (req, res) => {
  console.log('req', req.body);
  let contactToUpdate = req.body.id;
  const queryString = 
  `UPDATE "people"
    SET "contacted" = true
    WHERE "people"."id" = $1;
  `;
  pool.query(queryString, [contactToUpdate])
  .then(response => {
    console.log('response', response);
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error in contacts.router.js PUT', error);
    res.status(500);
  });
});
module.exports = router;