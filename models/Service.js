const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Service Schema
const serviceSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  work: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});


// Create a Model from the Schema
const Service = mongoose.model('Services', serviceSchema);

module.exports = Service;
