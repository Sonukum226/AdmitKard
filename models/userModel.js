const mongoose = require("mongoose");

const userSchema = {
  name: String,
  email: String,
  contact: Number,
  course: String,
  country: String,
  dob: String,
};

const userInfo = mongoose.model("userInfo", userSchema);

module.exports = userInfo;
