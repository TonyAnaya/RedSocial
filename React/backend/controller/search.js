const searchModel = require("../model/search")

module.exports.searchUser = async (searchUse) =>{
    console.log(searchUse)
    let respuesta = await searchModel.search(searchUse)
    console.log(respuesta)
    return respuesta
}