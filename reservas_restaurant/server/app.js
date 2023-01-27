const express = require("express");
const getReservasRouter = require("../routes/ReservaRouter");

class App {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use("/api/reservas", getReservasRouter());
    this.app = app;
  }

  start(port) {
    if (!port) {
      port = 0;
    }

    this.app.listen(port, console.log(`Listening to ${port}`));
  }
}

module.exports = App;
