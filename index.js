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

// module.exports라는 빈 객체를 만들어서 eval후 리턴
// module.exports = app; 이렇게 하면 app 함수가 빈객체 대신 대입
module.exports.a = 1;
module.exports.app = app;
