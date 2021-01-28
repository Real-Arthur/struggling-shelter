const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log('contacts get');
  
  const queryString = 
    `SELECT 
      "people"."first_name", 
      "people"."last_name", 
      "people"."email", 
      "people"."adoption_success", 
      "people"."contacted", 
      "animals"."name", 
      "animals"."animal_type", 
      "animals"."breed", 
      "animals"."price" 
    FROM "people"
    JOIN "animals"
      ON "people"."interested_in" = "animals"."id";`;
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
module.exports = router;