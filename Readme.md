# Clean architecture

## Capa Servidor:

- Importar express, rutas  
  <code> require(express, rutas)</code>

- Crear clase App con un constructor  
  <code>

      class App {
      constructor() {
        // Data inicial aca...
        }
      }

  </code>

- Dentro del constructor crear el servidor  
  <code> express() </code>
- Colocar middlewares para que utilice las rutas y convierta a JSON las respuestas  
  <code> app.use() </code>
- Asignar servidor a la clase App  
  <code> this.app = app </code>
- Comenzar a escuchar  
  <code>app.listen(port) </code>

---

## Capa Ruteo

- Importar express, API

- Crear una función que traiga todas las rutas y colocar las rutas adentro

- Instanciar enrutador de express

- Instanciar almacenaje (API)

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
