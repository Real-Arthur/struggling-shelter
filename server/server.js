const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files
app.use(express.static('build'));
// App Set //
const PORT = process.env.PORT || 5000;
// Routes required
const animalsRouter = require('./routes/animals.router');
const interestedRouter = require('./routes/interested.router');
// Routes used
app.use('/api/animals', animalsRouter);
app.use('/api/interested', interestedRouter);
/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});