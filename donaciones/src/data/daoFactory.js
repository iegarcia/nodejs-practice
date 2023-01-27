import DonacionesDAORam from './daoDonacionesArray.js'

class DonacionesDAOFactory {
    static getDao() {
        return new DonacionesDAORam()
    }
}

export default DonacionesDAOFactory
