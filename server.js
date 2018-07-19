const express = require('express');
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.port || 5000;
const dbURL = 'mongodb://gradepuxi22:!lizd412@ds243041.mlab.com:43041/bartoblog';

MongoClient.connect(dbURL, { useNewUrlParser: true }, (err, database) => {
  if (err)
    return console.dir(err);
  const db = database.db('bartoblog');

  const postCollection = db.collection('posts');

  postCollection.find({}).sort({createdAt: -1, title: 1}).toArray((err, result) => {
    if (err)
      return console.dir(err);
    app.get('/api/posts', (req, res) => {
      res.send({ posts: result });
    });
  });
});

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));