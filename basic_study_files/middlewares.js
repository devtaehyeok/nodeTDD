const express = require('express');
// 익스프레스 인스턴스를 어플리케이션이라 한다. 미들웨어, 라우팅, 서버 요청 대기하게 만들기.
const app = express();

// 미들웨어의 입력은 정해져 있음
function logger(req, res, next) {
  console.log('i am logger');
  next();
}

function logger2(req, res, next) {
  console.log('i am logger2');
  next();
}

// next를 실행해야 다음 로직을 수행함

app.use(logger); // 종료 후
app.use(logger2); // 2 실행 됨

app.listen(3000, function () {
  console.log(`Server is running`);
});
// curl -X GET 'localhost:3000'로 요청해보자