const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true },
  company: { type: String },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});
