const sql = require("../db/conexion")

module.exports.regis = async (regis)=>{
    let response = await sql.query(`INSERT INTO users (email, pass, name, last_name, brd_date, foto, fondo, pais, ciudad, link, git, descri) VALUES ('${regis.email}',MD5('${regis.pass}'),'${regis.name}','${regis.last_name}','${regis.brd_date}','${regis.foto}','${regis.fondo}','${regis.pais}','${regis.ciudad}','${regis.link}','${regis.git}','${regis.descri}')`)
    console.log(response)
    console.log(typeof response)
    return response[0]
}