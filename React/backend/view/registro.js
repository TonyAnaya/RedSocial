const regisController = require("../controller/registro")

module.exports = (app) => {
    app.post("/registro",async (req,res) =>{
        const result = await regisController.regisUser(req.body.regis)
        res.send({result})
    })

}