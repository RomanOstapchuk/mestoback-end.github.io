const router = require('express').Router();
const path = require('path');
const fs = require('fs');

/* eslint no-underscore-dangle: 0 */
const dirusers = path.join(__dirname, '../data/user.json');
const users = require('../data/user');

router.get('/users/:id', (req, res) => {
  fs.readFile(dirusers, { encoding: 'utf8' }, (err) => {
    if (err) {
      res.status(500).send({ message: 'Users is not found' });
      return;
    }
    if (!users.find((item) => item._id === req.params.id)) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    } else {
      res.send(users.find((item) => item._id === req.params.id));
    }
  });
});

router.get('/users', (req, res) => {
  fs.readFile(dirusers, { encoding: 'utf8' }, (err) => {
    if (err) {
      res.status(500).send({ message: 'Users is not found' });
      return;
    }
    res.send(users);
  });
});

module.exports = router;
