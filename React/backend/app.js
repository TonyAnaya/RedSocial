const express = require("express")
const cors = require("cors")
require("dotenv").config()
const sql = require("./db/conexion")
const app = express()

//Views
const pokemon = require("./view/pokemon")
const user = require("./view/user")
const publi = require("./view/publi")
const search = require("./view/search")
const registro  = require("./view/registro")
const update  = require("./view/update")

//Midlewares
app.use(express.json())
app.use(cors())


async function serverStart() {
    await sql.authenticate();
    app.listen(3001,()=>{
        console.log("Server start on http:localhost:3001")
    })
}

serverStart()

pokemon(app);
user(app);
publi(app);
search(app);
registro(app);
update(app);

