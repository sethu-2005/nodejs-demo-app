const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Elevate Lab Task 1! My CI/CD pipeline works!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});