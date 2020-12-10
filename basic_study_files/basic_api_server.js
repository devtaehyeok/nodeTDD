const express = require('express');
const app = express();
const port = 3000;
const morgam = require('morgan');

var users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'alice' },
  { id: 3, name: 'alice' },
];

app.use(morgam('dev'));

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// curl -X GET 'localhost:3000/users' -v