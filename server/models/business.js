const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  owner: { type: String, required: true },
  businessName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  about: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
