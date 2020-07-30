const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  owner: { type: String, required: true },
  businessName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  about: { type: String, required: false },
  tagline: { type: String, required: true },
  // schedule: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
  instagram: { type: String },
  facebook: { type: String },
  website: { type: String },
  masks: { type: String },
  date: { type: Date, default: Date.now },
  photos: [{ type: String }],
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  logo: [{ type: String }],
  menuOrServices: [{ type: String }],
  lat: { type: Number },
  lng: { type: Number },
  tags: [{ type: String }],
  schedule: {
    MonOpen: { type: Number },
    MonClose: { type: Number },
    TuesOpen: { type: Number },
    TuesClose: { type: Number },
    WedOpen: { type: Number },
    WedClose: { type: Number },
    ThursOpen: { type: Number },
    ThursClose: { type: Number },
    FriOpen: { type: Number },
    FriClose: { type: Number },
    SatOpen: { type: Number },
    SatClose: { type: Number },
    SunOpen: { type: Number },
    SunClose: { type: Number },
  },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
