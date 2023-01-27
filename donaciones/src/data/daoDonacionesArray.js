import DonacionesDao from './daoDonaciones.js'
import CustomError from '../errores/CustomError.js'

class DonacionesDaoRam extends DonacionesDao {

    constructor(){
        super()
        this.donaciones = []
    }

    async add(donacionParaCargar){
        try {
            let donacionNueva = donacionParaCargar
            this.donaciones.push(donacionParaCargar)
            
            return donacionNueva
        } catch (error) {
            throw new CustomError(500, 'error al cargar una nueva donacion')
        }
        
    }

    async getByAmount(monto){
        let results = []

        try {
            for( let donacion of this.donaciones){
                if(donacion.isHigherAmount(monto)){
                    if(!donacion.isAnonymous()){
                        results.push(donacion)
                    }
                }
            }
        } catch (error) {
            throw new CustomError(500, 'error al obtener los datos')
        }
        
    return results
    }
}
export default DonacionesDaoRam