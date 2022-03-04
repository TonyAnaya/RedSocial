import './Perfil.css';
import { useState  } from 'react';
import { apiPubli, savePubli, searchUser } from '../../api/api';
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NavLink } from "react-router-dom";




function Perfil() {

    let descripcion = "Edita tu perfil para añadir una descripcion :)"
    const [search,setSearch] = useState([])
    const [publi,setPubli] = useState([])
    const [token, saveToken]= useLocalStorage("TOKEN",{})
    const [user, saveUser]= useLocalStorage("USER",{})
    
    let data = JSON.parse(window.localStorage.USER)
    //window.location.pathname = window.location.pathname + "/" + data.name
    if(data.descri){
        descripcion = data.descri;
    }
    let fondito = data.fondo
    let linkedin = data.link
    let github = data.git
    return ( 
        <div>
            <div className="container-fluid row col-lg-12 text-align-center fond" style={{backgroundImage: `url(${fondito})`}}>
                <div className="card perf"  >
                    <img className="card-img-top fotPerf" src={data.foto} alt="Card image cap"/>
                </div>
                <div className="card-title nombre">
                    {data.name} {data.last_name}
                </div>
            </div>
            <br/>
            <div className="container-fluid row prueba" >
                <div className="card descript col-lg-7" >
                    <div className="card-title descriptext">
                        {descripcion} 
                    </div>
                </div>
                <div className="card datitos col-lg-4 offset-1" >
                    <div className=" conten row">
                        <div className="col-lg-6 contenti">
                            Nacimiento: 
                        </div>
                        <div className="col-lg-6 contenti">
                            {data.brd_date}
                        </div>
                    </div>
                    <div className=" conten row">
                        <div className="col-lg-6 contenti">
                            Pais: 
                        </div>
                        <div className="col-lg-6 contenti">
                            {data.pais}
                        </div>
                        
                    </div>
                    <div className=" conten row">
                        <div className="col-lg-6 contenti">
                            Ciudad:  
                        </div>
                        <div className="col-lg-6 contenti">
                            {data.ciudad}
                        </div>
                        
                    </div>
                    <div className=" conten row">
                        <div className="col-lg-6 contenti">
                            LinkedIn: 
                        </div>
                        <div className="col-lg-6 contenti">
                            <a href={linkedin}>LinkedIn</a>
                            
                        </div>
                         
                    </div>
                    <div className=" conten row">
                        <div className="col-lg-6 contenti">
                             Git Hub: 
                        </div>
                        <div className="col-lg-6 contenti">
                            <a href={github}>GitHub</a>
                        </div>
                    </div>
                    
                </div>
                    <NavLink className="nav-link" to="/editar-perfil">Editar Perfil</NavLink>
            </div>
        </div>
     );
}

export {Perfil} ;