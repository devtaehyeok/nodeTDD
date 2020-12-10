/* 슈퍼 테스트는 익스프레스 통합 테스트용 라이브러리다
• 내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸
뒤 결과를 검증한다 */

const request = require('supertest');
const should = require('should');
const { app } = require('./index');

// done 비동기 표시
describe('GET /users는', () => {
  describe('성공시', () => {
    it('유저 객체를 담은 배열로 응답한다 ', (done) => {
      request(app)
        .get('/users')
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });
    it('최대 limit 갯수만큼 응답한다. ', (done) => {
      request(app)
        .get('/users?limit=2')
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
  });
  // done 비동기 표시
  describe('GET /users는', () => {
    describe('실패시', () => {
      it('limit이 숫자형이 아니면 400을 응답한다.', (done) => {
        request(app)
          .get('/users?limit=notNum')
          .expect(400) // 400: 잘못된 요청 (Bad Request)
          .end(() => done());
      });
    });
  });
});
