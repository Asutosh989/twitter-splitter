const mongoose = require('mongoose');

// create User Schema
const User = new mongoose.Schema({
  twitter_id: String,
  username: String,
  displayName: String,
});

module.exports = mongoose.model('users', User);
