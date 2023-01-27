const Servidor = require("./server/app");

const app = new Servidor();

const PORT = 3000;

app.start(PORT);
