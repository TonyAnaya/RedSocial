const sql = require("../db/conexion")

module.exports.login = async (userData) => {
    let response = await sql.query(`SELECT email,name,brd_date,foto FROM users WHERE email LIKE '${userData.email}' AND pass = MD5('${userData.pass}')`)
    let loginResult = await response[0][0] ? true : false ;

    let loginResponse ={
        login: loginResult, 
        data: response[0][0] ? response[0][0] : false
    }
    console.log(loginResponse)
    return loginResponse
}

