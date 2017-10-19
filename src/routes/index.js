const express = require('express');
const tweet = require('./tweet');
const search = require('./search');
const passport = require('passport');

const router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/front');
}

/* GET home page. */
router.get('/', ensureAuthenticated, (req, res) => {
  res.render('index', { title: 'Twitter-Splitter', user: req.user });
});

// Get Front Page
router.get('/front', (req, res) => {
  res.render('frontPage', { title: 'Twitter-Splitter' });
});


router.get('/auth/twitter', passport.authenticate('twitter'));

// handle callback after twitter has authenticated the user
router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/front',
  }),
  (req, res) => {
    res.redirect('/');
  },
);

router.use('/tweet', tweet);
router.use('/search', search);

console.log('Its running!!!');
module.exports = router;
