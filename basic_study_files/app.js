// 익스프레스 인스턴스를 어플리케이션이라 한다. 서버에 필요한 기능인 미들웨어를 어플리케이션에 추가한다.
// 어플리케이션, 미들웨어, 라우팅, 요청객체, 응답객체
// 미들웨어 - 함수 배열
// 서버 기능 추가 시 사용
// 라우팅 -> 경로마다 반응 체계적 관리
// 요청, 응답 기본 노드 객체를 감싸서 사용

const express = require('express');
// 익스프레스 인스턴스를 어플리케이션이라 한다. 미들웨어, 라우팅, 서버 요청 대기하게 만들기.
const app = express();
const morgan = require('morgan');

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
app.use(morgan('dev'));
app.listen(3000, function () {
  console.log(`Server is running`);
});
// curl -X GET 'localhost:3000'로 요청해보자
// 요청 URL에 대해 적절한 핸들러 함수로 넘겨주는 것을 라우팅이라고 부른다.
// 미들웨어랑 라우터는 함수다
// 기능 함수, 요청을 적절한 핸들러로 넘겨주는 함수
// 서버 기능 추가, 요청 처리 핸들러 함수로 넘겨주는 함수