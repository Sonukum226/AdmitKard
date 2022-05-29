const express = require("express");
const router = express.Router();
const userInfo = require("../models/userModel");

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const contact = req.body.contact;
  const course = req.body.course;
  const country = req.body.country;
  const dob = req.body.dob;

  const newUser = new userInfo({
    name,
    email,
    contact,
    course,
    country,
    dob,
  });

  newUser.save();
});

module.exports = router;
