const DatabaseFactory = require("./DatabaseFactory");
const mongoose = require("mongoose");
const CustomError = require("../errors/CustomError");
require("dotenv/config");

class Database {
  constructor() {
    this.connected = mongoose.connection.readyState;
  }

  async connect() {
    try {
      await mongoose.connect(process.env.DB);
      console.log("conectado");
    } catch (error) {
      throw new CustomError(500, error.message);
    }
  }
  async closeConnection() {
    await mongoose.connection.close();
  }

  async isConnected() {
    if (this.connected != 1) {
      await this.connect();
    }
    return this.connected;
  }
}

module.exports = Database;
