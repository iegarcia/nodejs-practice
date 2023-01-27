const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/interes-vecinal";

function databaseConection() {
  return mongoose.connect(db, () => console.log("Conectado"));
}

module.exports = databaseConection;
