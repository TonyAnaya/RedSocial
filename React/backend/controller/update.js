const updateModel = require("../model/update")

module.exports.updateUser = async (updateUse) =>{
    return await updateModel.update(updateUse)
}