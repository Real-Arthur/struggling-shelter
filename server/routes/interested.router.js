const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('req', req.body);
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let dob = req.body.dob;
  let address = req.body.address;
  let occupation = req.body.occupation;
  let typeOfHome = req.body.typeOfHome;
  let interestedIn = req.body.interestedIn;
  const queryString = `INSERT INTO "people" ("first_name", "last_name", "email", "date_of_birth", "address", "occupation", "type_of_home", "interested_in")
  VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8);`;
  pool.query(queryString, [firstName, lastName, email, dob, address, occupation, typeOfHome, interestedIn])
  .then(response => {
    console.log('response', response);
    res.send(200);
  })
  .catch(error => {
    console.log('error in interested.router.js POST', error);
    res.send(500);
  });
});
module.exports = router;