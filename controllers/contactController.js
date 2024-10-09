const Contact = require("../models/Contact.js");

// module.exports.renderFeedbackForm = async (req, res) => {
//   res.render("report/feedback.ejs");
// };

module.exports.createContact = async (req, res) => {
  try {
    // Extract feedback details from the request body
    const { name, phone, email, message } = req.body;

    // Create a new feedback instance
    const newContact = new Contact({ 
      name, phone, email, message
    });

    // Save the feedback to the database
    await newContact.save();

    res.redirect("/api/services");
  } catch (error) {
    console.error("Error creating feedback:", error);
    // res.redirect("/feedback");
  }
};
