const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const dirusers = path.join(__dirname, '../data/user.json');
const users = require('../data/user');

router.get('/users/:id', (req, res) => {
  fs.readFile(dirusers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log('Users is not found');
    }
    if (!users.find(item => item._id === req.params.id)) {
      res.status(404).send({ 'message': 'Нет пользователя с таким id' });
    } else {
      res.send(users.find(item => item._id === req.params.id));
    }
  });
});

router.get('/users', (req, res) => {
  fs.readFile(dirusers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log('Users is not found');
      return;
    }
    res.send(users);
  });
});

module.exports = router;
