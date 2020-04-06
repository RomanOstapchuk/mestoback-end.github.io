const router = require('express').Router();
const users  = require('../data/user');

router.get('/users/:id', (req, res) => {
  if (!users.find(item => item._id === req.params.id)) {
    res.status(404).send({"message": "Нет пользователя с таким id"});
    return;
  }else{
    res.send(users.find(item => item._id === req.params.id));
  };
});

router.get('/users', (req, res) => {
  res.send(users);
});

module.exports = router;
