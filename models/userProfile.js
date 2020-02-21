
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserProfileSchema = new Schema({
  userId: { type: String, default: -1 },
  isDeleted:  { type: Boolean, default: false }
});


const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;