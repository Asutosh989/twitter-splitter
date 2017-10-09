const express = require('express');
const Twit = require('twit');
const config = require('../lib/config');

const router = express.Router();

router.get('/', (req, res) => {
  const T = new Twit(config);
  const stats = req.query.tweets;
  console.log(stats);
  const d = stats.match(/.{1,140}/g);
  const doc = {
    status: d,
  };
  doc.status.forEach((status) => {
    T.post('statuses/update', { status }, (err, data) => {
      console.log(data);
    });
  });
  res.render('success');
});

module.exports = router;
