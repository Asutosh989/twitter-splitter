var express = require('express');
var Twit = require('twit');
var config = require('../lib/config');
const tweet = require('./tweet');
const search = require('./search');
let passport = require('passport');
var router = express.Router();

function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.redirect('/front');
    }
}
/* GET home page. */
router.get('/',ensureAuthenticated, function(req, res) {
  res.render('index', { title: 'Twitter-Splitter' });
});

//Get Front Page
router.get('/front', function(req, res) {
  res.render('frontPage', { title: 'Twitter-Splitter' });
});



router.get('/auth/twitter', passport.authenticate('twitter'));

//handle callback after twitter has authenticated the user
router.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            // successRedirect : '/',
            failureRedirect : '/front'
        }),
      (req,res,next)=>{
        res.redirect('/');
      });

router.use('/tweet',tweet);
router.use('/search', search);


console.log('Its running!!!');
module.exports = router;
