const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController.js");

router
  .route("/")
  //   .get(isLoggedIn, wrapAsync(feedbackController.renderFeedbackForm))
  .post(contactController.createContact);

module.exports = router;
