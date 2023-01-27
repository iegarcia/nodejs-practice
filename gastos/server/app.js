const express = require("express");
const getGastosRouter = require("../routes/gastosRouter");

class App {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use("/gastos", getGastosRouter());
    this.app = app;
  }

  start(port) {
    if (!port) {
      port = 0;
    }

    const server = this.app.listen(port, () => this.app.emit("app ready"));
  }
}

module.exports = App;
