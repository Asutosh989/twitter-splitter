let mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  twitter_id: String,
  username : String,
  displayName : String
});


module.exports = mongoose.model('users', User);