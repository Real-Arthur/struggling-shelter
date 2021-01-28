const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// gets animals depending on type specified in params from database
// only returns pets that haven't been adopted
router.get('/', (req, res) => {
  console.log('req', req.query.animalType);
  let animalType = req.query.animalType;
  const queryString = `SELECT * FROM "animals" WHERE "animal_type" = $1 AND "adopted" = false;`;
  pool.query(queryString, [animalType])
    .then(response => {
      console.log('response', response.rows);
      res.send(response.rows);
    })
    .catch(error => {
      console.log('error in animals.router.js GET', error);
      res.status(500);
    });
});
module.exports = router;