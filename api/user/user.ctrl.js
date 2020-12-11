const models = require('../../models');

const index = (req, res) => {
  // 쿼리는 사실 문자열임
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  models.User.findAll({ limit: limit }).then((users) => {
    return res.json(users);
  });
};

const show = (req, res) => {
  // 쿼리는 사실 문자열임
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  models.User.findOne({
    where: {
      id,
    },
  }).then((user) => {
    if (!user) {
      return res.status(404).end();
    }
    return res.json(user).end();
  });
};

const destroy = (req, res) => {
  // 쿼리는 사실 문자열임
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  models.User.destroy({
    where: { id },
  }).then(() => {
    return res.status(204).end();
  });
};

const create = (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).end();

  models.User.create({ name })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).end();
      }
      res.status(500).end();
    });
};

const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();

  // if (isConflict) return res.status(409).end();

  models.User.findOne({ where: { id } }).then((user) => {
    if (!user) return res.status(404).end();

    user.name = name;
    user
      .save()
      .then((_) => {
        res.json(user);
      })
      .catch((err) => {
        if (err.name === 'SequelizeUniqueConstraintError') {
          return res.status(409).end();
        }
        res.status(500).end();
      });
  });
};

module.exports = {
  index,
  show,
  destroy,
  create,
  update,
};