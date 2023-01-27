import Servidor from './server/app.js'

const app = new Servidor()

const PORT = 8080

app.start(PORT)