const sql = require("../db/conexion")

module.exports.search = async (search)=>{
    let response = await sql.query(`SELECT email,name,last_name,brd_date,foto,fondo,ciudad,pais,link,git,descri FROM users WHERE email LIKE '${search}' OR name LIKE '${search}' OR last_name LIKE '${search}'`)

    return response[0]
}