import './Perfil.css';
import { useState ,useEffect } from 'react';
import { apiPubli, savePubli, searchUser } from '../../api/api';
import { useLocalStorage } from "../../hooks/useLocalStorage";



function Perfil() {

    const [search,setSearch] = useState([])
    const [publi,setPubli] = useState([])
    const [token]= useLocalStorage("TOKEN",{})

    const printPub = async (token) => {
        const publiBak = await apiPubli(token)
        setPubli(publiBak[0])
   }
    useEffect(async ()=>{
        printPub(token.token)
        let resul = await searchUser("%%")
        let array = resul.result
        let newState =array
        console.log(array)
        
        setSearch(newState)
        console.log(search)
    },[])

    const onSubmit = async (event)=>{
        event.preventDefault()
        console.log("se esta haciendo el buscar")
        if(!event.target[0].value){
            event.target[0].value= "%%";
        }

        let resul = await searchUser(event.target[0].value)
        let array = resul.result
        let newState =array
        console.log(array)
        
        setSearch(newState)
        event.target[0].value= "";
        console.log(search)
        
    }

    return ( 
        <div className="container-fluid row col-lg-12 text-align-center">
            <div className="input-group col-lg-8 forma">
                <form onSubmit={onSubmit} className="offset-3">
                    <h4>Vamos a stalkear a otros usuarios :)</h4>
                    <div className="d-flex">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Search'/>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </div>
                </form>
            </div>

            
            {
                search.slice(0).reverse().map(q =>(
                <div key={q.id} className="col-lg-3">
                    <div className="card card_user">
                        <img className="card-img-top img-fluid fot" src={q.foto}></img>
                        <div className="card-body">
                            <h5 className="card-title">{q.name} {q.last_name}</h5>
                            <h5 className="card-text ">{q.email}</h5>
                            <br/>
                            <a href="#" className="btn btn-primary">Visitar</a>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
     );
}

export {Perfil} ;