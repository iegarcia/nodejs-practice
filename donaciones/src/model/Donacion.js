import _ from 'underscore'

const ANONIMO = 'Anonimo'


class Donacion {

    constructor(monto, donante){
        this.monto = monto
        this.setDonante(donante)
    }

    setDonante(donante){
        if(donante == null){
            this.donante = ANONIMO
        }else{
            this.donante = donante
        }
    }

    isHigherAmount(amount){
        let ok = false
        if(this.monto >= amount){
            ok = true
        }
        return ok
    }

    isAnonymous() {
        
        return _.isEqual(this.donante, ANONIMO)
    }

}
export default Donacion