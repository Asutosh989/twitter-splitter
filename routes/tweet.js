var express = require('express');
var Twit = require('twit');
var config = require('../lib/config');
var router = express.Router();

router.get('/', function(req, res) {
    var T = new Twit(config);
    var stats = req.query.tweets;
    console.log(stats);
    var d = stats.match(/.{1,140}/g);
    var doc = {
      status: d
    }
    for(var i=0;i<doc.status.length;i++){
	     console.log(doc.status[i]);
       T.post('statuses/update', {status: doc.status[i]}, function (err, data, response) {
        console.log(data);
      });
    }
    res.render('success');
});

module.exports = router;
