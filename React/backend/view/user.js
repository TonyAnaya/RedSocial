const userController = require("../controller/user")

module.exports = (app) => {
    app.post("/login", async (req,res) =>{
        let result = await userController.loginUser(req.body)
        res.send(result)
    })
}