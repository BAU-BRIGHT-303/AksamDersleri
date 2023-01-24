const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:admin123@food-order-cluster.qibw678.mongodb.net/food-order?retryWrites=true&w=majority"
);
// connection var mı yok mu kontrol için yazıyoruz..
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Başarılı");
});
db.on("error", () => {
  console.log("Başarısız");
});
module.exports = mongoose;
