const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const dircards = path.join(__dirname, '../data/cards.json');
const cards = require('../data/cards.json');

router.get('/cards', (req, res) => {
  fs.readFile(dircards, { encoding: 'utf8' }, (err) => {
    if (err) {
      res.status(500).send({ message: 'Cards is not found' });
      return;
    }
    res.status(200).send(cards);
  });
});

module.exports = router;
