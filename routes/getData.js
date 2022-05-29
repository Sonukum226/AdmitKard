const express = require("express");
const router = express.Router();
const userInfo = require("../models/userModel");

// router.route("/search").get((req, res) => {
//   const email = req.query.email;
//   userInfo.find({ email: email }, (err, user) => {
//     if (err) {
//       res.send(err);
//     }
//     const data = res.json(user);
//     // console.log(data);
//   });
// });

// get data from mongodb
router.route("/search").get((req, res) => {
  console.log(hello);
  userInfo.find({}, (err, user) => {
    if (err) {
      res.send(err);
    }
    const data = res.json(user);
    console.log(data);
  });
});

module.exports = router;
