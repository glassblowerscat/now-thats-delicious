const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const ryan = { name: 'Ryan', age: 56, cool: true };
  // res.send('Hey! It works!');
  // res.json(ryan);
  // res.send(req.query.name);
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
