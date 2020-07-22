const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  owner: { type: String, required: true },
  businessName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  about: { type: String, required: false },
  tagline: { type: String, required: true },
  hours: { type: String, required: true },
  instagram: { type: String },
  facebook: { type: String },
  website: { type: String },
  hours: { type: String, required: true },
  menuOrServices: { data: Buffer, contentType: String },
  masks: { type: String },
  date: { type: Date, default: Date.now },
  photos: [{ type: String }],
  address: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  county: { type: String },
  country: { type: String },
  lat: { type: String },
  lng: { type: String },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
