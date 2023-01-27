const Database = require("../db/database");

class DatabaseFactory {
  static getDB() {
    return new Database();
  }
}

module.exports = DatabaseFactory;
