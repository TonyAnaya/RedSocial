const updateController = require("../controller/update")

module.exports = (app) => {
    app.post("/update",async (req,res) =>{
        const result = await updateController.updateUser(req.body.updat)
        res.send({result})
    })

}