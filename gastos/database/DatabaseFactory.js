const Database = require("./Database");

class DatabaseFactory {
  getDB() {
    return new Database();
  }
}

module.exports = new DatabaseFactory();
