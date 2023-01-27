const express = require("express");

const port = 3000;

const db = require("../data/databaseData");
const informeRouter = require("../routes/routesInforme");

class App {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use("/informes", informeRouter);

    app.get("/", (req, res) => {
      res.send("Pagina Principal");
    });

    app.listen(port);
  }
}
db();

module.exports = App;
