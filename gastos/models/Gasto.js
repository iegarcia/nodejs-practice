const mongoose = require("mongoose");
const { Schema } = mongoose;

const date = new Date();

const Gasto = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    year: {
      type: Number,
      default: date.getFullYear(),
    },
    month: {
      type: Number,
      default: date.getMonth() + 1,
    },
    day: {
      type: Number,
      default: date.getDate(),
    },
  },
});

module.exports = mongoose.model("Gasto", Gasto);
