const sql = require("../db/conexion")

module.exports.regis = async (regis)=>{
    let response = await sql.query(`INSERT INTO users (email, pass, name, last_name, brd_date, foto) VALUES ('${regis.email}',MD5('${regis.pass}'),'${regis.name}','${regis.last_name}','${regis.brd_date}','${regis.foto}')`)
    console.log(response)
    console.log(typeof response)
    return response[0]
}