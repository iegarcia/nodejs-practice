const express = require("express");
const notasRouter = require("../routes/notas");
const dbFactory = require("../factory/databaseFactory");

class App {
  constructor() {
    const app = express();
    app.use("/notas", notasRouter);
    this.app = app;

    app.get("/", (req, res) => {
      res.send("pagina principal");
    });

    dbFactory.getDB();
  }

  start(port) {
    this.app.listen(port);
  }
}

module.exports = App;
