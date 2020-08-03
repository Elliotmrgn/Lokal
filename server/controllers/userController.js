const db = require("../models");

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  findById: function (req, res) {
    db.User.findOne({ _id: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(422).json(err));
  },

  register: (req, res) => {
    const { firstName, lastName, username, password, email } = req.body;
    // ADD VALIDATION
    db.User.findOne({ username: username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`,
        });
      }
      const newUser = new db.User({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        email: email,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },

  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie("connect.sid"); // clean up!
      return res.json({ msg: "logging you out" });
    } else {
      return res.json({ msg: "no user to log out!" });
    }
  },

  auth: function (req, res, next) {
    next();
  },

  authenticate: (req, res) => {
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  },
};
