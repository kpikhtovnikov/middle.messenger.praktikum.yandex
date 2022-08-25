const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, "/dist"));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port http://localhost:${PORT}!`);
});
