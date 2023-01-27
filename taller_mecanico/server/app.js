const express = require("express");
const getTurnosRouter = require("../router/turnosRouter");

// configuramos el servidor
class App {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use("/turnos", getTurnosRouter()); //Cargamos las rutas
    this.app = app;
  }

  //Colocamos un metodo para arrancar el servidor
  start(port) {
    if (!port) {
      port = 0;
    }

    this.app.listen(port, console.log(`Listening to ${port}`));
  }
}

module.exports = App;
