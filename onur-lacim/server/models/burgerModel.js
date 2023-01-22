const mongoose = require("mongoose");

const BurgerSchema = new mongoose.Schema(
  {
    ad: {
      type: String,
      require,
    },
    ozellik: [],
    fiyat: [],
    kategori: {
      type: String,
      require,
    },
    img: {
      type: String,
      require,
    },
    desc: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

const burgerModel = mongoose.model("foods", BurgerSchema);

module.exports = burgerModel;
