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
// 에러 핸들링 미들웨어- 없으면 에러 실행 후 뒤 함수 실행 안됨.
// function error(err, req, res, next) {
//   console.log('i am error handler logger');
//   next(new Error('error occured'));
// }
// next를 실행해야 다음 로직을 수행함

app.use(errormw); // 실행 후 오류
app.use(morgan('dev'));
// 클라이언트 요청을 계속 대기하게 해줌.
app.listen(3000, function () {
  console.log(`Server is running`);
});
// curl -X GET 'localhost:3000'로 요청해보자
