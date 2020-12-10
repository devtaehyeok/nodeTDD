// spec이 테스트. 테스트가 요구사항의 명세
// mocha가 대신 실행해줌
// console.log('start');
util = require('./utils');
assert = require('assert');
describe('util.js모듈은', () => {
  it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
    // given
    const testStr = 'hello';
    // when
    const result = util.capitalize(testStr);
    // then
    assert.equal(result, 'Hello');
  });
});

// 노드 assert말고 should 라이브러리를 쓰자.