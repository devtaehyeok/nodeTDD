const models = require('../models');

// 내부적으로 프라미스를 리턴함
module.exports = () => {
  return models.sequelize.sync({ force: true });
};
