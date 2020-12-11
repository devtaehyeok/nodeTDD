// api 로직
var users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'daniel' },
  { id: 3, name: 'morgan' },
];

const index = (req, res) => {
  // 쿼리는 사실 문자열임
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  return res.json(users.slice(0, limit)).end();
};

const show = (req, res) => {
  // 쿼리는 사실 문자열임
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const user = users.filter((user) => user.id === id)[0];
  if (!user) {
    return res.status(404).end();
  }
  return res.json(user).end();
};

const destroy = (req, res) => {
  // 쿼리는 사실 문자열임
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const removedUsers = users.filter((user) => user.id !== id);
  if (users.length === removedUsers.length) {
    return res.status(404).end();
  }
  users = removedUsers;
  return res.status(204).end();
};

const create = (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).end();

  const isConflict = users.filter((user) => user.name === name).length;
  if (isConflict) return res.status(409).end();

  const id = Date.now();
  const user = { id, name };
  users.push(user);
  return res.status(201).json(user);
};

const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();

  const isConflict = users.filter((user) => user.name === name).length;
  if (isConflict) return res.status(409).end();

  const user = users.filter((user) => user.id === id)[0];
  if (!user) return res.status(404).end();

  user.name = name;

  res.json(user);
};

module.exports = {
  index,
  show,
  destroy,
  create,
  update,
};
