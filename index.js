const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello and show auto edits');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
