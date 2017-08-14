var express = require('express');
var Twit = require('twit');
var config = require('../lib/config');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('search');
});

router.get('/add', function(req, res) {
    var T = new Twit(config);
    var search = req.query.search_tweets;
    console.log(search);
    var doc = {
      q: search,
    }
    T.get('search/tweets', doc, searchTweet);

    function searchTweet(err, data, response) {
      var t = data.statuses;
      var h = new Array();
      for (var i=0;i<t.length;i++){
          h[i] = t[i].text;
        }
        console.log(h);
      res.render('result', {docs: h});
    }
});

module.exports = router;
