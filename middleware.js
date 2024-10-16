// const Service = require("./models/Service");
// const ExpressError = require("./utils/ExpressError.js");

//Connecting Login Route
module.exports.isLoggedIn = (req, res, next) => {
  // console.log(req.path, "..", req.originalUrl);
  if (!req.isAuthenticated()) {
    req.flash("error", "you must be logged in to create new listing!");
    return res.redirect("/");
  }
  next();
};

//post-login Page
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.currentUserMiddleware = async (req, res, next) => {
  if (req.user) {
    // Do something with the current user
    console.log(`Current user: ${req.user.username}`);
  } else {
    console.log("No user logged in");
  }
  next();
};