const Sequelize = require("sequelize");

const sql = new Sequelize('pokemons','root',null,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sql