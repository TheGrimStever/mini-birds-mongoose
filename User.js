var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  username: String,
  level: Number,
  location: String,
  member: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);
