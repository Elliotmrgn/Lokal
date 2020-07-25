const db = require("../models");
const { decodeBase64 } = require("bcryptjs");

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
        console.log(dbUser);
      })
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    {
      db.Business.find({})
        .then((businesses) => {
          res.json(businesses);
          console.log(businesses);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  findViaSearch: function (req, res) {
    db.Business.find({
      businessName: { $regex: req.body, $options: "i" },
    })
      .then((foundBusinesses) => {
        res.json(foundBusinesses);
        console.log(foundBusinesses);
      })
      .catch((err) => res.status(422).json(err));
  },
};
