const publiModel = require("../model/publi")


module.exports.listPubli = async () =>{
    
    return await publiModel.publi()
}

module.exports.savePubli = async (name,pub,img) =>{
    await publiModel.savePubli({name,pub,img})
}