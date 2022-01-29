const searchModel = require("../model/search")

module.exports.searchUser = async (searchUse) =>{
    return await searchModel.search(searchUse)
}