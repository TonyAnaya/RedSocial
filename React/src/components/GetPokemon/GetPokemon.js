import { useState } from 'react';
import { getPokemon, savePokemon } from '../../api/api';
import './GetPokemon.css';

function GetPokemon(props) {

    const [state, setState] = useState({counter: 0,title:"Contador de estado",color:"black",pokemonImage:"",pokemonName:"",pokemonID:false,pokemonType:"", backgroundColor:"white"})  
    const [state2, setState2] = useState({color:"black",pokemonType2:'', backgroundColor:"white"})
    const [back,setBack]= useState({backgroundColor:"white"})

    const add = () =>{
        let newState = {
            ...state,
            counter: state.counter + 1, 
        }
        setState(newState)
    }

    const substract = () =>{
        let newState = {
            ...state,
            counter: state.counter - 1, 
        }
        setState(newState)
    }

    const reset = () =>{
        let newState = {
            ...state,
            counter: 0, 
        }
        setState(newState)
    }


    const setColor = (event) =>{

        let newState3 = {
            ...back,
            backgroundColor: event.target.value
        }
        setBack(newState3)
    }


    const printPokemon = async (event) =>{

        let newPokemon =  await getPokemon(event.target.value)
        let pokeJSON = await newPokemon.json()
    
        let tipo = "white"
        let tipo2 = "white"
        let col = "black"
        let col2 = "black"
        let type2 = ""
        if (pokeJSON.types[0].type.name == 'fire') {
            tipo = 'red'
        }
        if (pokeJSON.types[0].type.name == 'water') {
            tipo = 'blue'
        }
        if (pokeJSON.types[0].type.name == 'grass') {
            tipo = 'lightgreen'
        }
        if (pokeJSON.types[0].type.name == 'bug') {
            tipo = 'green'
        }
        if (pokeJSON.types[0].type.name == 'normal') {
            tipo = 'gray'
        }
        if (pokeJSON.types[0].type.name == 'poison') {
            tipo = 'purple'
        }
        if (pokeJSON.types[0].type.name == 'electric') {
            tipo = 'yellow'
        }
        if (pokeJSON.types[0].type.name == 'ground') {
            tipo = 'brown'
        }
        if (pokeJSON.types[0].type.name == 'fairy') {
            tipo = 'pink'
        }
        if (pokeJSON.types[0].type.name == 'fighting') {
            tipo = 'darkred'
        }
        if (pokeJSON.types[0].type.name == 'psychic') {
            tipo = 'lightSalmon'
        }
        if (pokeJSON.types[0].type.name == 'rock') {
            tipo = 'gray'
        }
        if (pokeJSON.types[0].type.name == 'ghost') {
            tipo = 'darkblue'
        }
        if (pokeJSON.types[0].type.name == 'ice') {
            tipo = 'lightblue'
        }
        if (pokeJSON.types[0].type.name == 'dragon') {
            tipo = 'SlateBlue'
        }
        if (pokeJSON.types[0].type.name == 'dark') {
            tipo = 'black'
            col = "white" 
        }
        if (pokeJSON.types[0].type.name == 'steel') {
            tipo = 'silver'
        }
        if (pokeJSON.types[0].type.name == 'flying') {
            tipo = 'skyblue'
        }
        if (pokeJSON.types[1]){
            type2 = pokeJSON.types[1].type.name
            if (pokeJSON.types[1].type.name == 'fire') {
                tipo2 = 'red'
            }
            if (pokeJSON.types[1].type.name == 'water') {
                tipo2 = 'blue'
            }
            if (pokeJSON.types[1].type.name == 'grass') {
                tipo2 = 'lightgreen'
            }
            if (pokeJSON.types[1].type.name == 'bug') {
                tipo2 = 'green'
            }
            if (pokeJSON.types[1].type.name == 'normal') {
                tipo2 = 'gray'
            }
            if (pokeJSON.types[1].type.name == 'poison') {
                tipo2 = 'purple'
            }
            if (pokeJSON.types[1].type.name == 'electric') {
                tipo2 = 'yellow'
            }
            if (pokeJSON.types[1].type.name == 'ground') {
                tipo2 = 'brown'
            }
            if (pokeJSON.types[1].type.name == 'fairy') {
                tipo2 = 'pink'
            }
            if (pokeJSON.types[1].type.name == 'fighting') {
                tipo2 = 'darkred'
            }
            if (pokeJSON.types[1].type.name == 'psychic') {
                tipo2 = 'lightSalmon'
            }
            if (pokeJSON.types[1].type.name == 'rock') {
                tipo2 = 'gray'
            }
            if (pokeJSON.types[1].type.name == 'ghost') {
                tipo2 = 'darkblue'
            }
            if (pokeJSON.types[1].type.name == 'ice') {
                tipo2 = 'lightblue'
            }
            if (pokeJSON.types[1].type.name == 'dragon') {
                tipo2 = 'SlateBlue'
            }
            if (pokeJSON.types[1].type.name == 'dark') {
                tipo2 = 'black'
                col2 = "white" 
            }
            if (pokeJSON.types[1].type.name == 'steel') {
                tipo2 = 'silver'
            }
            if (pokeJSON.types[1].type.name == 'flying') {
                tipo2 = 'skyblue'
            }

        }

        let newState2 ={
            backgroundColor: tipo2,
            color: col2
        }
        setState2(newState2)
        savePokemon(state.pokemonID)

        let newState = {
            ...state,
            pokemonImage: pokeJSON.sprites.front_default,
            pokemonName: pokeJSON.name,
            pokemonType: pokeJSON.types[0].type.name,
            pokemonType2: type2,
            pokemonID: pokeJSON.id,
            backgroundColor: tipo,
            color : col
        }
        setState(newState) 
        console.log(await savePokemon(event.target.value))    
    }
 
    const isEven = state.counter % 2 === 0
    const message = isEven ? "Is Even" : "Is Odd"


  return (
<div className='container text-center' >
   <br />
   <div className='card'>
      <div className='card-body' style={back}>
         <h3>Contador de Pokémon</h3>
         <h3>{state.counter}</h3>
         <h4>{message}</h4>
         <br />
         <div className='row'>
            <div className='col-sm-4'>
               <button className='btn btn-primary' onClick={add}> <i className="fas fa-plus-circle"></i> Agregar</button>
            </div>
            <div className='col-sm-4'>
               <button className='btn btn-primary' onClick={substract}> <i className="fas fa-plus-circle"></i> Restar</button>
            </div>
            <div className='col-sm-4'>
               <button className='btn btn-danger' onClick={reset}> <i className="fas fa-toilet"></i> Reset</button>
            </div>
         </div>
         <p>Elije el color de fondo:</p>
         <input className='form-control' type="color" onChange={setColor}  placeholder='Ingresa el titulo del contador'/>
         <br />
         <br />
         <h3>Trae un Pokémon:</h3>
         <br />
         <input className='form-control' type="number" min="1" max="898" step="1" onChange={printPokemon}  placeholder='Ingresa el número de pokemon'/>
         
         <br />
         <div className='row'>
         <div className='col-sm-4'>
            {state.pokemonID &&
                <>
                    <br />
                    <h3>{state.pokemonID} - {state.pokemonName}</h3>
                </>
            } 
         </div>
         <div className='col-sm-4'>
            {state.pokemonID &&
                <>
                    <img className='img-fluid' src={state.pokemonImage} alt='Pokémon' />
                </>
            } 
         </div>
         <div className='col-sm-4'>
            {state.pokemonType &&
                <>
                    <br />
                    <h4 style={state}>{state.pokemonType}</h4>
                </>
            }
            {state.pokemonType2 &&
                <>
                    <h4 style={state2}>{state.pokemonType2}</h4>
                </>
            }
         </div>
        

         </div>
         <br />
      </div>
   </div>
</div>
  );
}

export {GetPokemon};