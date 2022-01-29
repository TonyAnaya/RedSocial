import { useState,useEffect } from 'react';
import {listPokemon} from '../../api/api';
import { useLocalStorage } from "../../hooks/useLocalStorage";

function ListPokemon() {
    const [token]= useLocalStorage("TOKEN",{})
    const [list, setList] = useState([])

    const newListPokemon = async (token) => {
         const pokelistBak = await listPokemon(token)

         setList(pokelistBak.list[0])
    }

    useEffect(()=>{
        newListPokemon(token.token)
    },[])

    return (
        <div className="card container col-lg-12 ">
            <div className="card-body">
                <h3>Lista de Pokemones:</h3>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>idPokemon</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            list.map(pokemon =>(
                            <tr key={pokemon.idPokemon}>
                                <td>{pokemon.idPokemon}</td>
                                <td>{pokemon.date}</td>
                            </tr>
                                ))
                        }   
                    </tbody>
               </table>
            </div>
        </div>
     );
}

export {ListPokemon};