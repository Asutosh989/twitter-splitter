var express = require('express');
var Twit = require('twit');
var config = require('../lib/config');
var router = express.Router();

router.get('/', function(req, res) {
    var T = new Twit(config);
    var stats = req.query.tweets;
    console.log(stats);
    var doc = {
      status: stats
    }
    T.post('statuses/update', doc, tweetStatus);

    function tweetStatus(err, data, response) {
      if(err){throw(err);}
      else{
        console.log(data);
      }
    res.render('success');
  }
});

module.exports = router;
