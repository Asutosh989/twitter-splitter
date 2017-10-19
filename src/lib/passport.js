const TwitterStrategy = require('passport-twitter').Strategy;
const config = require('./config.js');

const User = require('../models/User');

function setupPassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  const twitterConfig = {
    consumerKey: config.twitterAuth.consumerKey,
    consumerSecret: config.twitterAuth.consumerSecret,
    callbackURL: config.twitterAuth.callbackURL,
  };
  passport.use(new TwitterStrategy(
    twitterConfig,
    (token, tokenSecret, profile, done) => {
      process.nextTick(() => {
        User.findOne({
          twitter_id: profile.id,
        }, (err, user) => {
          if (err) {
            return done(err);
          }
          // if the user is found then log them in
          if (user) {
            return done(null, user); // user found, return that user
          }
          // if there is no user, create new User
          const newUser = new User();

          // set all of the user data that we need
          newUser.twitter_id = profile.id;
          newUser.username = profile.username;
          newUser.displayName = profile.displayName;

          // save our user into the database
          newUser.save((error) => {
            if (error) {
              throw err;
            }
            return done(null, newUser);
          });

          return null;
        });
      });
    },
  ));
}

module.exports = setupPassport;
