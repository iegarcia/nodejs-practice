const mongoose = require("mongoose");
const { Schema } = mongoose;

const Informe = new Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Informes", Informe);
