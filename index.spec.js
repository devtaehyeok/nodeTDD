/* 슈퍼 테스트는 익스프레스 통합 테스트용 라이브러리다
• 내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸
뒤 결과를 검증한다 */

const { app, a } = require('./index');
const request = require('supertest');
// done 비동기 표시
console.log(a);
describe('GET /users는', () => {
  it('... userList json을 리턴한다', (done) => {
    request(app, a)
      .get('/users')
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
