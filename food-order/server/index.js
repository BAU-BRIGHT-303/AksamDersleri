const express = require("express");
const cors = require("cors");
const db = require("./db");
const burgerModel = require("./models/burgerModel");
const app = express();
const burgersRoute = require("./routes/burgersRoute");

app.use(express.json());
app.use(cors());

//hhtp://local:5355/api/burgers/getBurgers
app.use("/api/burgers/", burgersRoute);

//serverımızı inşa edeceğimiz portu belirleyerek ayağa kaldırdık.
app.listen(5355, () => {
  console.log(`Food Order Serverı 5355 portunda çalışıyor.🔥🔥🔥`);
});
