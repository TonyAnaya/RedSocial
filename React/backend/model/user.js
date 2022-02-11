const sql = require("../db/conexion")

module.exports.login = async (userData) => {
    console.log(userData.email)
    let response = await sql.query(`SELECT email,name,last_name,brd_date,foto,fondo,ciudad,pais,link,git,descri FROM users WHERE email LIKE '${userData.email}' AND pass = MD5('${userData.pass}')`)
    let loginResult = await response[0][0] ? true : false ;


    let loginResponse ={
        login: loginResult, 
        data: response[0][0] ? response[0][0] : false
    }
    return loginResponse
}

