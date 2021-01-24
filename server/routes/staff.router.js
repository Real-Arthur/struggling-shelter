const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// gets all cats from database
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM "staff";`;
  pool.query(queryString)
  .then(response => {
    console.log('response', response.rows);
    res.send(response.rows);
  })
  .catch(error => {
    console.log('error in dogs.router.js GET', error);
    res.status(500);
  });
});
module.exports = router;