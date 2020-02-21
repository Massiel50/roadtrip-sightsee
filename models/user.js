const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    isDeleted:  { type: Boolean, default: false }
  });

  UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };

  UserSchema.methods.validPassword = (password, savedPW) => {
    return bcrypt.compareSync(password, savedPW);
  };
  
  const User = mongoose.model("User", UserSchema);

module.exports = User;