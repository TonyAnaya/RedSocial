const regisModel = require("../model/registro")

module.exports.regisUser = async (regisUse) =>{
    return await regisModel.regis(regisUse)
}