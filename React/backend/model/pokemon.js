const sql = require("../db/conexion")

module.exports.save = async (idPokemon) => {
    await sql.query('REPLACE INTO lastpokemon (idPokemon) VALUES ('+idPokemon+')')
}

module.exports.list = async () => {
    let result = await sql.query('SELECT * FROM lastpokemon ORDER BY date DESC')
    return result  
}




