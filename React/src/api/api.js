
const getPokemon = async (idPokemon) =>{
    let pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/'+ idPokemon);
    return pokemon
}

const savePokemon = async (idPokemon) =>{
    return await fetch('http://localhost:3001/savepokemon',{
        method: 'POST',
        body: JSON.stringify({idPokemon}),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}

const listPokemon = async (token) =>{
    return await fetch('http://localhost:3001/listpokemon',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}


const apiLogin = async (userData) =>{
    return await fetch('http://localhost:3001/login',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}

const apiPubli = async () =>{
    return await fetch('http://localhost:3001/publi',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}

const savePubli = async (name,pub,img) =>{
    return await fetch('http://localhost:3001/savepubli',{
        method: 'POST',
        body: JSON.stringify({name,pub,img}),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}

const searchUser = async (searchUse)=>{
    return await fetch('http://localhost:3001/search',{
        method: 'POST',
        body:  JSON.stringify({searchUse}),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err)) 

}

export {getPokemon,savePokemon,listPokemon,apiLogin,apiPubli, savePubli ,searchUser};
