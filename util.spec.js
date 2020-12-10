// spec이 테스트. 테스트가 요구사항의 명세
// mocha가 대신 실행해줌
// console.log('start');
const util = require('./utils');
const should = require('should');
describe('util.js모듈은', () => {
  it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
    // given
    const testStr = 'hello';
    // when
    const result = util.capitalize(testStr);
    // then
    result.should.be.equal('Hello'); // should를 쓰면 가독성이 좋아진다.
  });
});

// node_modules/.bin/mocha util.spec.js
// 노드 assert말고 should 라이브러리를 쓰자.
