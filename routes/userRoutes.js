const express = require("express");
const router = express.Router();
// const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// MVC Framework
const userController = require("../controllers/userController.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(userController.signup);

router.route("/login")
.get(userController.renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);
// router.get("/user", userController.someRoute)

router.get("/logout", userController.logout);

module.exports = router;