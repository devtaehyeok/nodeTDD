// const http = require('http');
// http.createServer();

const fs = require('fs');

const data = fs.readFile('./data.txt', 'utf8', (err, data) => {
  console.log(data);
});
