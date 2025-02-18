class IdDto{
    id
    encodedKey
    fechaDeRegistro    
    constructor(id, encodedKey, fechaDeRegistro = new Date){
        this.id = id
        this.encodedKey = encodedKey
        this.fechaDeRegistro = fechaDeRegistro
    }
}

module.exports = IdDto