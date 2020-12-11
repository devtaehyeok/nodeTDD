const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '.db/sqlite',
  logging: false, // 쿼리를 안보여줌
});

// id는 자동으로 만들어줌
const User = sequelize.define('User', {
  // unique == true
  name: { type: Sequelize.DataTypes.STRING, unique: true },
});

module.exports = { Sequelize, sequelize, User };

// 유저 모델 만들고 define 데이터베이스 연동 sync()
// 파일 디비 사용
