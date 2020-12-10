const express = require('express');
// 익스프레스 인스턴스를 어플리케이션이라 한다. 미들웨어, 라우팅, 서버 요청 대기하게 만들기.
const app = express();
const morgan = require('morgan');

// 미들웨어의 입력은 정해져 있음
// 미들웨어는 함수들의 연속이다

// 에러 미들웨어 - 다음 미들웨어 실행 한됨
function errormw(req, res, next) {
  console.log('i am error logger');
  next(new Error('error occured'));
}
// 에러 핸들링 미들웨어+ 변수 4개
function errorhandleMW(err, req, res, next) {
  console.log('i am error handler logger');
  next();
}
// next를 실행해야 다음 로직을 수행함

app.use(errormw); // 종료 후
app.use(errorhandleMW); // 2 실행 됨
app.use(morgan('dev'));
app.listen(3000, function () {
  console.log(`Server is running`);
});
// curl -X GET 'localhost:3000'로 요청해보자

// 요청 URL에 대해 적절한 핸들러 함수로 넘겨주는 것을 라우팅이라고 부른다.
// 미들웨어랑 라우터는 함수다
