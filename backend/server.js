const express = require('express');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, "/dist"));
});

app.listen(PORT, function () {
  console.log(`App listening on port http://localhost:${PORT}!`);
});
