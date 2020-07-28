const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  //   schedule: [{ type: Schema.Types.ObjectId, ref: "Schedule" }],
  businessId: { type: Schema.Types.ObjectId, ref: "Business" },
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
  SunClose: { type: Number }
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;