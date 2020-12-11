const models = require('../models');

// 내부적으로 프라미스를 리턴함
module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false,
  };

  return models.sequelize.sync(options);
};
