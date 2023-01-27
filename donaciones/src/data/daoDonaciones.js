import CustomError from '../errores/CustomError.js'

class DonacionesDao {

    async add() {
        throw new CustomError(500, 'falta implementar add!')
    }
    async getByAmount() {
        throw new CustomError(500, 'falta implementar getByAmount!')
    }
}

export default DonacionesDao