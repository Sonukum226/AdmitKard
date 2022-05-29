const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();

//connect to mongodb
mongoose.connect(
  "mongodb+srv://sr3214:1234%40str@admitkardcluster.gbdm5je.mongodb.net/test",
  { useNewUrlParser: true }
);

const itemsSchema = {
  name: String,
  email: String,
  contact: Number,
  course: String,
  country: String,
  dob: String,
};

const userInfo = mongoose.model("userInfo", itemsSchema);

//store in database
// const item1 = userInfo({
//   name: "Srini",
//   email: "123@mail.com",
//   contact: 123456789,
//   course: "B.Tech",
//   country: "India",
//   dob: "12/12/1212",
// });

router.post("/", async (req, res) => {
  const { name, email, contact, course, country, dob } = req.body;
  const item = userInfo({
    name,
    email,
    contact,
    course,
    country,
    dob,
  });
  try {
    userInfo.insertMany([item], function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully saved to database");
      }
    });
    const savedItem = await item.save();
    res.send(savedItem);
  } catch (err) {
    res.status(422).send(err);
  }
  //insert into database
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
