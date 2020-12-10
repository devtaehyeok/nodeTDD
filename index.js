const { query } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const morgam = require('morgan');
var bodyParser = require('body-parser');
var users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'daniel' },
  { id: 3, name: 'morgan' },
];

// 미들웨어는 기능 추가용
app.use(morgam('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  // 쿼리는 사실 문자열임
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  return res.json(users.slice(0, limit)).end();
});

app.get('/users/:id', (req, res) => {
  // 쿼리는 사실 문자열임
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const user = users.filter((user) => user.id === id)[0];
  if (!user) {
    return res.status(404).end();
  }
  return res.json(user).end();
});

app.delete('/users/:id', (req, res) => {
  // 쿼리는 사실 문자열임
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const removedUsers = users.filter((user) => user.id !== id);
  if (users.length === removedUsers.length) {
    return res.status(404).end();
  }
  users = removedUsers;
  return res.status(204).end();
});

app.post('/users', (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).end();

  const isConflict = users.filter((user) => user.name === name).length;
  if (isConflict) return res.status(409).end();

  const id = Date.now();
  const user = { id, name };
  users.push(user);
  return res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();

  const isConflict = users.filter(user => user.name === name).length;
  if (isConflict) return res.status(409).end();

  const user = users.filter(user=> user.id === id)[0];
  if (!user) return res.status(404).end();

  user.name = name;

  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// curl -X GET 'localhost:3000/users' -v

// module.exports라는 빈 객체를 만들어서 eval후 리턴
// module.exports = app; 이렇게 하면 app 함수가 빈객체 대신 대입
module.exports.app = app;

// function isNameConflict(users, name) {
//   return Boolean(users.filter((user) => user.name === name).length);
// }

// function isNumber(str) {
//   return !Boolean(Number.isNaN(id));
// }

// function isUserExist(users, id) {
//   return Boolean(users.filter((user) => user.id === id)[0]);
// }
