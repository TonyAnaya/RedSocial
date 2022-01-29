const pokemonModel = require("../model/pokemon")

module.exports.savePokemon = async (idPokemon) =>{
    await pokemonModel.save(idPokemon)
}

module.exports.listPokemon = async () =>{
    return await pokemonModel.list()
}