const publiController = require("../controller/publi")

module.exports = (app) => {
    app.post("/savepubli", (req,res) =>{
        publiController.savePubli(req.body)
        res.send({ok:"OK desde el back (guardando post)"})
    })
    app.get("/publi", async (req,res) =>{
        let result = await publiController.listPubli(req.body)
        res.send(result)
    })
}