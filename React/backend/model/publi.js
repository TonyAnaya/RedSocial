const sql = require("../db/conexion")

module.exports.savePubli = async (name,pub,img) => {
    console.log(name.name.img)
    await sql.query('INSERT INTO publicaciones (name , publi , imag) VALUES ("'+name.name.name+'", "'+name.name.pub+'", "'+name.name.img+'")')
}

module.exports.publi = async () => {
    let result = await sql.query('SELECT * FROM publicaciones ORDER BY date ASC')
    return result  
}
