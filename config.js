require('dotenv').config() //? linea necesaria para acceder a las variables de entorno

module.exports = {
    api: {
        port: process.env.PORT || 3000
    },
    db: {

    }
}