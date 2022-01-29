const sql = require("../db/conexion")

module.exports.search = async (search)=>{
    let response = await sql.query(`SELECT email,name,last_name,brd_date,foto FROM users WHERE name LIKE '${search}' OR last_name LIKE '${search}'`)
    return response[0]
}