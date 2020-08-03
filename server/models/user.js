const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  username: { type: String, unique: false, required: false },
  password: { type: String, unique: false, required: false },
  email: { type: String, unique: true, required: true },
  businesses: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Business model
      ref: "Business",

    },
  ],
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
userSchema.pre("save", function (next) {
  if (!this.password) {
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

// Create reference to User & export
const User = mongoose.model("User", userSchema);
module.exports = User;
