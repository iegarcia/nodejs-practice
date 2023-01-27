# Clean architecture

Practica de NodeJS utilizando clean arquitecture

## Capa Servidor:

- Importar express, rutas
- Crear clase App con un constructor
- Dentro del constructor crear el servidor
- Colocar middleware para que utilice las rutas y convierta a JSON las respuestas
- Asignar servidor a la clase App
- Comenzar a escuchar
  <pre>
  require(express)
  require(rutas)

  class App {
  constructor() {
    const app = express();
    app.use(express.json());
    app.use("/ruta", rutas());
    this.app = app;
  }

  start(port) {
    if (!port) {
      port = 0;
    }
    this.app.listen(port, console.log(`Listening to ${port}`));
     }
}
</pre>

---

## Capa Ruteo

- Importar express, API
- Crear una función que traiga todas las rutas y colocar las rutas adentro
- Instanciar enrutador de express
- Instanciar almacenaje (API)

<pre>
function getRutas() {
  const router = express.Router();
  const api = new Api();

  router.get("/ruta", async (req, res) => {
    //codigo...
  });

  return router;
</pre>

---

## Dao y factory

### Factory

Es un patron de diseño en el que con base en un parámetro crea un molde preparado con lo necesario, en este caso se usa un dao con la RAM.

### Dao

Vendría a representar una capa intermedia donde se manipulan o se almacenan los datos luego de consumirlos de la fuente, en este caso se usa la RAM (array local). Dentro de este dao existirán métodos que manipulen el array para obtener los datos requeridos

---

## Capa Negocio (API)

- Importar factory de almacenajes y modelo (crear si no está creado)

> Modelo: Es como crear una clase con sus atributos y el constructor, crear validaciones correspondientes

- Sobrescribir y/o añadir métodos correspondientes

---

## El orden de los pasos es indistinto, una vez hecho todo esto crear un archivo que servirá de base para correr el servidor y probarlo.

<pre>
const Servidor = require("./server/app");

const app = new Servidor();

const PORT = 3000;

app.start(PORT);

</pre>
