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
};
