import express from 'express'
import DonacionesApi from '../api/donacionesApi.js'
import _ from 'underscore'

function getDonacionesRouter(){

    const router = express.Router()
    const donacionesApi = new DonacionesApi()

    router.post('/ingreso', async (req, res)=>{
        let monto = req.body.monto
        let donante = null

        if(!_.isEmpty(req.body.donante)) donante = req.body.donante
    

        try {
            const donacionNueva = await donacionesApi.agregar(monto, donante)
            res.status(201).json(donacionNueva)
        } catch (err) {
            res.status(err.status).json(err)
        }
    })

    router.get('/consulta', async (req, res)=>{
        try {
            let monto = req.query.monto
            const donaciones = await donacionesApi.buscarPorMonto(monto)
            res.json(donaciones)
        } catch (err) {
            //console.log(err)
            res.status(err.status).json(err)
            //res.status(500).json(err)
        }
    })

    //rutas no implementadas
    router.post('*', (req, res)=>{
        res.json("Ruta no implementada")
    })

    router.get('*', (req, res)=>{
        res.json("Ruta no implementada")
    })
    router.put('*', (req, res)=>{
        res.json("Ruta no implementada")
    })
    router.delete('*', (req, res)=>{
        res.json("Ruta no implementada")
    })

    return router
}
export {getDonacionesRouter}