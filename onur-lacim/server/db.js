const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.mtbggnt.mongodb.net/food-order?retryWrites=true&w=majority"
);

// connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz ve veritabanını dinleyen metot.
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarı ile sağlandı.");
});

db.on("error", () => {
  console.log("Mongo DB Bağlantısında Hata Oluştu");
});

module.exports = mongoose;
