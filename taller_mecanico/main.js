//Archivo base para inicializar el servidor
const Servidor = require("./server/app");

const app = new Servidor(); //Inicializamos el servidor al crear una nueva instancia

const PORT = 3000;

app.start(PORT);
