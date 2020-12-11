const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const user = require('./api/user');

// 미들웨어는 기능 추가용
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', user);

// curl -X GET 'localhost:3000/users' -v

module.exports.app = app;
// module.exports라는 빈 객체를 만들어서 eval후 리턴
// module.exports = app; 이렇게 하면 app 함수가 빈객체 대신 대입
