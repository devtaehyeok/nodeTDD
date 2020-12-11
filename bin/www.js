const { app } = require('..');
const port = 3000;

app.listen(port, () => {
  console.log(`Serve is running on http://localhost:${port}`);
});
