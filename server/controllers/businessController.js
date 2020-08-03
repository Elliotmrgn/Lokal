const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Business.create(req.body)
      .then((dbBusiness) => {
       
        return db.User.findOneAndUpdate(
          { _id: req.user._id },
          { $push: { businesses: dbBusiness._id } },
          { new: true }
        );
      })
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    let updateme = req.params.id;
    db.Business.updateOne({ _id: updateme }, req.body)
      .then((dbBusiness) => {
        res.json(dbBusiness);
      })
      .catch((err) => res.status(422).json(err));
  },

  findAll: function (req, res) {
    const email = req.query.email;
    let query = {};
    if (email) {
      query.email = email;
    }

    {
      db.Business.find(query)
        .then((businesses) => {
          res.json(businesses);
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
    res.json("Whoa");
    db.Schedule.findOne({ businessId: req.params.id })
      .then((schedule) => {
        res.json(schedule);
      })
      .catch((err) => res.status(422).json(err));
  },
  //populate schedule with business
  populateSchedule: (req, res) => {
    db.Business.find({})
      .populate("Schedule")
      .then((dbschedule) => {
        res.json(dbschedule);
      })
      .catch((err) => res.json(err));
  },
  //post schedule
  postSchedule: (req, res) => {
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
      })
      .catch((err) => res.json(err));
  },

  findViaSearch: function (req, res) {
    const regexSearch = req.params.search;

    db.Business.find({ businessName: new RegExp(regexSearch, "i") })
      .then((foundBusinesses) => {
        res.json(foundBusinesses);
      })
      .catch((err) => res.status(422).json(err));
  },

  findViaTags: function (req, res) {
    db.Business.find({
      tags: req.params.tags,
    }).then((foundBussinessByTags) => {
      res.json(foundBussinessByTags);
    });
  },
};
