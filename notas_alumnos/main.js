const Servidor = require("./src/app.js");

const app = new Servidor();

const port = 3000;

app.start(port);
