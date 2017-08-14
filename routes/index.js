var express = require('express');
var Twit = require('twit');
var config = require('../lib/config');
const tweet = require('./tweet');
const search = require('./search');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Twitter-Splitter' });
});

router.use('/tweet',tweet);
router.use('/search', search);

console.log('Its running!!!');
module.exports = router;
