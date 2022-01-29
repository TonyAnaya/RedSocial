const searchController = require("../controller/search")

module.exports = (app) => {
    app.post("/search",async (req,res) =>{
        const result = await searchController.searchUser(req.body.searchUse)

        res.send({result})
    })

}