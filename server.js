const express = require('express');
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.port || 5000;
const dbURL = 'mongodb://admin:myd1ckisbig@ds018848.mlab.com:18848/mongo_learn';

MongoClient.connect(dbURL, { useNewUrlParser: true }, (err, database) => {
  if (err)
    return console.dir(err);
  const db = database.db('mongo_learn');

  const bookCollection = db.collection('books');
  const testCollection = db.collection('test');

  bookCollection.find({}).toArray((err, result) => {
    if (err)
      return console.dir(err);
    app.get('/api/books', (req, res) => {
      res.send({ books: result });
    });
  });

  testCollection.find({}).toArray((err, result) => {
    if (err)
      return console.dir(err);
    app.get('/api/test', (req, res) => {
      res.send({ test: result });
    });
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));