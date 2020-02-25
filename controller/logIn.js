const db = require("../models");
// const User = require("../models/User");
// const UserProfile = require("../models/UserProfile");

module.exports = {
  signUp: (req, res) => {

    db.User.find(
      {
        userName: userName
      },
      (err, exists) => {
        if (err) {
          return res.send({
            success: false,
          });
        } else if (exists.length > 0) {
          return res.send({
            success: false,
          });
        }
      }
    );
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.userName = userName;
    newUser.password = newUser.generateHash(password);
    // have mongoose save the new User to the db
    newUser.save((err, user) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
        });
      }
      return res.send({
        success: true,
      });
    });
  },
  //  user Sign-in and create auth 
  signIn: (req, res) => {
    const { body } = req;
    const { password } = body;
    let { userName } = body;

    console.log("userName = " + userName + "  password = " + password);

    if (!userName) {
      return res.send({
        success: false,
      });
    }
    if (!password) {
      return res.send({
        success: false,
      });
    }
    userName = userName.toLowerCase();

    User.find(
      {
        userName: userName
      },
      (err, users) => {
        if (err) {
          return res.send({
            success: false,
          });
        }
        if (users.length != 1) {
          return res.send({
            success: false,
          });
        }
        const user = users[0];
        if (!user.validPassword(password, user.password)) {
          return res.send({
            success: false,
          });
        }
        const userProfile = new UserProfile();
        userProfile.userId = user._id;
        userProfile.save((err, doc) => {
          if (err) {
            return res.send({
              success: false,
            });
          }
          return res.send({
            success: true,
          });
        });
      }
    );
  }
};