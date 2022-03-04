const sql = require("../db/conexion")

module.exports.update= async (update)=>{
    let response = await sql.query(`UPDATE users SET name='${update.name}', last_name='${update.last_name}', foto='${update.foto}', fondo='${update.fondo}', ciudad='${update.ciudad}', pais='${update.pais}', link='${update.link}', git='${update.git}', descri='${update.descri}' WHERE email='${update.email}';`)

    return response[0]
}