const User = require("../models/User.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    console.log(newUser);
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    //Login after Signup
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  } catch (err) {
    console.error(error);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
  let redirectUrl = res.locals.redirectUrl || "/";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
