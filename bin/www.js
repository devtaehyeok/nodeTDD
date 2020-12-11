const { app } = require('..');
const port = 3000;
const syncDB = require('./sync-db');

syncDB().then((_) => {
  console.log('database Sync Success!')
  app.listen(port, () => {
    console.log(`Serve is running on http://localhost:${port}`);
  });
});
