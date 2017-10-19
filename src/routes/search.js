const express = require('express');
const Twit = require('twit');
const config = require('../lib/config');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('search');
});

router.get('/add', (req, res) => {
  const T = new Twit(config);
  const search = req.query.search_tweets;
  console.log(search);
  const doc = {
    q: search,
  };
  T.get('search/tweets', doc, (err, data) => {
    res.render('result', {
      docs: data.statuses.map(x => x.text),
    });
  });
});
module.exports = router;
