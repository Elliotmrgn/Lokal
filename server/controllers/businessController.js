const ObjectId = require("mongoose").Types.ObjectId;
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
  findAll: function (req, res) {
    if (req.user) {
      db.User.find({ _id: req.user._id })
        .populate({ path: "businesses", options: { sort: { date: -1 } } })
        .then((users) => {
          res.json({ books: users[0].businesses });
        })
        .catch((err) => res.status(422).json(err));
    } else {
      return res.json({ businesses: null });
    }
  },
};
