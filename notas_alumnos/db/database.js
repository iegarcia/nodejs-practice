const mongoose = require("mongoose");

class Database {
  constructor() {
    this.url = "mongodb://localhost:27017/notas";
    this.databaseConnection(this.url);
  }

  databaseConnection(url) {
    return mongoose.connect(url, () => console.log("conectado"));
  }
}

module.exports = Database;
