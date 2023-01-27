import CustomError from '../errores/CustomError.js'
import DonacionesDAOFactory from '../data/daoFactory.js'
import Donacion from '../model/Donacion.js'

class DonacionesApi{

    constructor(){
        this.donacionesDAO = DonacionesDAOFactory.getDao()
    }

    async agregar(monto, donante) {
    
        DonacionesApi.validarMonto(monto)
        const donacionParaAgregar = new Donacion(monto, donante)
        const donacionCargada = await this.donacionesDAO.add(donacionParaAgregar)
        return donacionCargada
    }

    async buscarPorMonto(monto){
        if (monto > 0) {
           const resultados = await this.donacionesDAO.getByAmount(monto)
            return resultados
        } else {
            throw new CustomError(500, 'El monto ingresado no es correcto')
        }
    }
    
    static validarMonto(monto){
        if(monto <= 0){
            throw new CustomError(500, 'monto es incorrecto')
        }
        
    }

} 
export default DonacionesApi