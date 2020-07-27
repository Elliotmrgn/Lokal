const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  owner: { type: String, required: true },
  businessName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  about: { type: String, required: false },
  tagline: { type: String, required: true },
  hours: { type: String },
  instagram: { type: String },
  facebook: { type: String },
  website: { type: String },
  menuOrServices: { data: Buffer, contentType: String },
  masks: { type: String },
  date: { type: Date, default: Date.now },
  photos: [{ type: String }],
  address: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  logo: [{ type: String }],
  menuOrServices: [{ type: String }],
  lat: { type: Number },
  lng: { type: Number },
  tags: [{ type: String }],
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
