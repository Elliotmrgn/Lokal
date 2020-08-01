const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  //   schedule: [{ type: Schema.Types.ObjectId, ref: "Schedule" }],
  businessId: { type: Schema.Types.ObjectId, ref: "Business" },
  MonOpen: { type: String },
  MonClose: { type: String },
  TuesOpen: { type: String },
  TuesClose: { type: String },
  WedOpen: { type: String },
  WedClose: { type: String },
  ThursOpen: { type: String },
  ThursClose: { type: String },
  FriOpen: { type: String },
  FriClose: { type: String },
  SatOpen: { type: String },
  SatClose: { type: String },
  SunOpen: { type: String },
  SunClose: { type: String },
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;
