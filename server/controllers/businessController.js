const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log("req.body!!!!!:", req.body);
    db.Business.create(req.body)
      .then((dbBusiness) => {
        console.log("dbBusiness:", dbBusiness);
        // db.Schedule.create({
        //   businessId: dbBusiness._id,
        //   MonOpen: req.body.schedule.MonOpen,
        //   MonClose: req.body.schedule.MonClose,
        //   TuesOpen: req.body.schedule.TuesOpen,
        //   TuesClose: req.body.schedule.TuesClose,
        //   WedOpen: req.body.schedule.WedOpen,
        //   WedClose: req.body.schedule.WedClose,
        //   ThursOpen: req.body.schedule.ThursOpen,
        //   ThursClose: req.body.schedule.ThursClose,
        //   FriOpen: req.body.schedule.FriOpen,
        //   FriClose: req.body.schedule.FriClose,
        //   SatOpen: req.body.schedule.SatOpen,
        //   SatClose: req.body.schedule.SatClose,
        //   SunOpen: req.body.schedule.SunOpen,
        //   SunClose: req.body.schedule.SunClose,
        // });
        // .populate("Schedule");
        return db.User.findOneAndUpdate(
          { _id: req.user._id },
          { $push: { businesses: dbBusiness._id } },
          { new: true }
        );
      })
      .then((dbUser) => {
        // console.log("DB USER!!! ", dbUser);
        res.json(dbUser);
      })
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    const email = req.query.email;
    let query = {};
    if(email) {
      query.email = email;
    }

    {
      db.Business.find(query)
        .then((businesses) => {
          res.json(businesses);
          console.log(businesses);
        })
        .catch((err) => res.status(422).json(err));
    }
  },

  
  findById: function (req, res) {
    db.Business.findOne({ _id: req.params.id })
      .then((business) => {
        res.json(business);
      })
      .catch((err) => res.status(422).json(err));
  },
  //get schedule data
  getProfileSchedule: function (req, res) {
    console.log("here??")
    res.json("Whoa");
    db.Schedule.findOne({ businessId: req.params.id })
      .then((schedule) => {
        res.json(schedule);
      })
      .catch((err) => res.status(422).json(err));
  },
  //populate schedule with business
  populateSchedule: (req, res) => {
    db.business
      .find({})
      .populate("Schedule")
      .then((dbschedule) => {
        res.json(dbschedule);
      })
      .catch((err) => res.json(err));
  },
  //post schedule
  postSchedule: (req, res) => {
    console.log("REQ HIT here");
    db.Schedule.create(req.body)
      .then((dbschedule) => {
        return db.Business.findOneAndUpdate(
          {
            _id: req.params.id,
          },
          {
            schedule: dbschedule._id,
          },
          {
            new: true,
          }
        );
      })
      .then((dbBusiness) => {
        console.log("testing here" + dbBusiness);
      })
      .catch((err) => res.json(err));
  },
};
