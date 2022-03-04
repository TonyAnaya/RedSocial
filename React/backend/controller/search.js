const searchModel = require("../model/search")

module.exports.searchUser = async (searchUse) =>{
    let respuesta = await searchModel.search(searchUse)
    return respuesta
}