const db = require("../models");

const User = db.user;

checkDuplicateUsernameOrPhoneNumber = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "username đã tồn tại"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        phoneNumber: req.body.phoneNumber
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "PhoneNumber đã tồn tại"
        });
        return;
      }

      next();
    });
  });
};


const checkUser = {
  checkDuplicateUsernameOrPhoneNumber: checkDuplicateUsernameOrPhoneNumber
 
};

module.exports = checkUser;
