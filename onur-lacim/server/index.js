const express = require("express");
const cors = require("cors");
const db = require("./db");
const burgerModel = require("./models/burgerModel");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getBurgers", (req, res) => {
  burgerModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(4000, () => {
  console.log(
    `🔥🔥 Food order serverı 4000 portunda başarıyla çalıştırıldı. 🔥🔥`
  );
});
