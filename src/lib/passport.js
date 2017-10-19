const TwitterStrategy = require('passport-twitter').Strategy;
const config = require('./config.js');

function setupPassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  const twitterConfig = {
    consumerKey: config.twitterAuth.consumerKey,
    consumerSecret: config.twitterAuth.consumerSecret,
    callbackURL: config.twitterAuth.callbackURL,
  };
  passport.use(new TwitterStrategy(
    twitterConfig,
    (token, tokenSecret, profile, done) => done(null, profile),
  ));
}

module.exports = setupPassport;
