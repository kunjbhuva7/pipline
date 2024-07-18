// Create a file named app.js with the following content
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! it is kunj from github');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
