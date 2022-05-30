const express = require("express");
const router = express.Router();
const userInfo = require("../models/userModel");

router.get("/search/:email", (req, res) => {
  const email = req.params.email;
  userInfo.find({ email: email }, (err, user) => {
    if (err) {
      res.send(err);
    }
    const data = res.json(user[0]);
    // console.log(data);
  });
});

module.exports = router;
