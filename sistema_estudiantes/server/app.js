const express = require("express");
const getEstudianteRouter = require("../router/EstudianteRouter");

class App {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use("/estudiantes", getEstudianteRouter());
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
