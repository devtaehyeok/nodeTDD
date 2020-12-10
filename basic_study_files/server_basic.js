const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 클라이언트 접속 시 실행
// 콜백은 메소드 완료시 실행
// 모든 경로에 대해 응답함
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// listen 서버가 클라이언트의 요청을 받기 위해 계속 대기함
// 콜백은 리슨 메소드 완료 시 실행
server.listen(port, hostname, () => {
  console.log(`Server runnuing at http://${hostname}:${port}/`);
});

// node index.js
// curl -X GET 'localhost:3000'로 요청해보자
