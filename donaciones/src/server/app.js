import express from 'express'
import { getDonacionesRouter } from '../router/donacionesRouter.js'

class App {

    constructor() {
        const app = express()
        app.use(express.json())
        app.set('json spaces', 2)
        app.use('/api/donaciones', getDonacionesRouter())
        this.app = app
    }

    start(port) {
        if (!port) {
            port = 0
        }

        const server = this.app.listen(port, () => {
            const actualPort = server.address().port
            this.app.emit("app_ready", actualPort)
        })
    }
}

export default App