const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Sending a 404 response without a message
    res.sendStatus(404);
  } else {
    res.json(user);
  }
});