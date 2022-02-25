import './OtroPerfil.css';
import { useState ,useEffect } from 'react';
import { useLocalStorage } from "../../hooks/useLocalStorage";




function OtroPerfil() {

    let descripcion = "Edita tu perfil para añadir una descripcion :)"
    const [search, setSearch] = useState([])
    const [publi, ysetPubli] = useState([])
    const [token, saveToken]= useLocalStorage("TOKEN",{})
    const [user, saveUser]= useLocalStorage("USER",{})
    const [friend, saveFriend]= useLocalStorage("FRIEND",{})
    
    let data = JSON.parse(window.localStorage.FRIEND)
    //window.location.pathname = window.location.pathname + "/" + data.name
    if(data.descri){
        descripcion = data.descri;
    }
    let fondito = data.fondo
    let linkedin = data.link
    let github = data.git
    let cont = 0
    console.log(cont)
    if (cont=0){
        setTimeout(() => {
            console.log("holi")
            window.location.reload(false);
        }, 1000);
        cont = cont +1
    }

    useEffect(async ()=>{
        let data = JSON.parse(window.localStorage.FRIEND)
    },[])
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
            </div>
        </div>
     );
}

export {OtroPerfil} ;