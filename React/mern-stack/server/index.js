const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.hx5alqf.mongodb.net/mern-stack?retryWrites=true&w=majority"
);

//back end tarafında get metodu kullanımı
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(newUser);
});

app.listen(5000, () => {
  console.log("Server 5000 portunda başarıyla çalışmaktadır :):):)");
});
