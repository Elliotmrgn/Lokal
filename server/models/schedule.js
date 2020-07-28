const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    schedule: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
    MonOpen: { type: String},
    MonClose: { type: Number},
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;
