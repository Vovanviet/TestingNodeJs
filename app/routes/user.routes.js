const { checkUser, checkDuplicateUsernameOrPhoneNumber } = require("../middleware/checkUser");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
 
  app.post(
    "/api/user/save",
    [
      checkDuplicateUsernameOrPhoneNumber
     
    ],
    controller.createUser
  );

  app.get( "/api/user/getAll", controller.getAll);
};
