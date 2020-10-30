const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(parser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('atlas_data');
  const countriesCollection = db.collection('countries');
  const countriesRouter = createRouter(countriesCollection);
  app.use('/api/countries', countriesRouter);

})
.catch(console.error);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});