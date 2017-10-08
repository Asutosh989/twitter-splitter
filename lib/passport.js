
let TwitterStrategy  = require('passport-twitter').Strategy;
let config = require('./config.js');
let passport = require('passport');

let User = require('../models/User')

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new TwitterStrategy({

        consumerKey     : config.twitterAuth.consumerKey,
        consumerSecret  : config.twitterAuth.consumerSecret,
        callbackURL     : config.twitterAuth.callbackURL,
        
    },
    function(token, tokenSecret, profile, done) {
       
        process.nextTick(function() {

            User.findOne({ 'twitter_id' : profile.id }, function(err, user) {


                if (err)
                    return done(err);
                     // if the user is found then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user, create new User
                    var newUser = new User();

                    // set all of the user data that we need
                    newUser.twitter_id          = profile.id;
                    newUser.username    = profile.username;
                    newUser.displayName = profile.displayName;

                    // save our user into the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });

    });

    }));

}
