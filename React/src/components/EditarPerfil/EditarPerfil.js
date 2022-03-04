import './EditarPerfil.css';
import { useState } from 'react';
import { apiLogin, searchUser, apiUpdate} from '../../api/api';
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NavLink } from "react-router-dom";


let descripcion = "Edita tu perfil para añadir una descripcion :)"


function EditarPerfil() {

    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState({error:false,errorMessage:"Error"})
    const [token, saveToken]= useLocalStorage("TOKEN",{})
    const [user, saveUser]= useLocalStorage("USER",{})
    
    let data = JSON.parse(window.localStorage.USER)
    if(data.descri){
        descripcion = data.descri;
    }
    let fondito = data.fondo




    const update = async (event) =>{
        event.preventDefault()
        let img = data.foto;
        let fond = data.fondo;
        let nam = data.name
        let last_nam = data.last_name
        let pai = data.pais
        let ciuda = data.ciudad
        let lin = data.link
        let gi = data.git
        let descr = data.descri
        
        let resul = await searchUser(data.email)
        let array = resul.result

        if(array[0]){
            console.log("El usuario existe, eso es bueno porque estamos updateando")
            if(!event.target[0].value){
                console.log("El nombre se conservará")
            }else {
                nam = event.target[0].value
            }
            if(!event.target[1].value){
                console.log("El apellido se conservará")
            }else {
                last_nam = event.target[1].value
            }
            if(!event.target[2].value){
                console.log("La foto se conservará")
            }else {
                img = event.target[2].value
            }
            if(!event.target[3].value){
                console.log("El fondo se conservará")
            }else {
                fond = event.target[3].value
            }
            if(!event.target[4].value){
                console.log("El pais se conservará")
            }else {
                pai = event.target[4].value
            }
            if(!event.target[5].value){
                console.log("La ciudad se conservará")
            }else {
                ciuda = event.target[5].value
            }
            if(!event.target[6].value){
                console.log("El linkedin se conservará")
            }else {
                lin = event.target[6].value
            }
            if(!event.target[7].value){
                console.log("El Github se conservará")
            }else {
                gi = event.target[7].value
            }
            if(!event.target[8].value){
                console.log("La descripcion se conservará")
            }else {
                descr = event.target[8].value
            }

            let newUpdate = {
                email: data.email,
                name: nam,
                last_name: last_nam,
                foto: img,
                fondo: fond,
                pais: pai,
                ciudad: ciuda,
                link: lin,
                git: gi,
                descri: descr
            }

            setLoading(true)
            apiUpdate(newUpdate)

            let newLogin = {
                email: data.email,
                pass: event.target[9].value
            }
            if(token && user){
                saveToken({})
                saveUser({})
            }
            
            
            let loginResult = await apiLogin(newLogin)
            if (loginResult) {
                setLoading(false)
                if(loginResult.error){
                    setError({
                        errorMessage:loginResult.error,
                        error:true})
                }
                if(loginResult.token){
                    setError({...error,
                        error:false})
                    saveToken({token: loginResult.token})
                    let data = loginResult.token.split(".")
                    let userData = window.atob(data[1])
                    saveUser(userData)
                    navigate("/perfil")
                        
                }
            }



        }
        
    }




    let linkedin = data.link
    let github = data.git




    return ( 
        <div className='container-fluid row col-lg-12'>
            <form onSubmit={update} className="col-lg-6">
                <br/>
                <h6>Introduce tus datos</h6>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput_Name" placeholder="Nombre de usuario"/>
                    <label htmlFor="floatingPassword">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput_Last_Name" placeholder="Apellido de usuario"/>
                    <label htmlFor="floatingPassword">Apellido</label>
                </div>
                <br/>
                <h6>Introduce url de tus imagenes</h6>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput_URL" placeholder="URL Foto" />
                    <label htmlFor="floatingPassword">Foto de Perfil</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput_URLFondo" placeholder="URL Foto" />
                    <label htmlFor="floatingPassword">Foto fondo</label>
                </div>
                <br/>
                <h6>De donde eres?</h6>
                <div className="form-floating">
                    <input type="text" className="form-control" id="Pais" placeholder="Pais" />
                    <label htmlFor="floatingPassword">Pais</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="Ciudad" placeholder="Ciudad" />
                    <label htmlFor="floatingPassword">Ciudad</label>
                </div>
                <br/>
                <h6>Links</h6>
                <div className="form-floating">
                    <input type="text" className="form-control" id="LinkedIn" placeholder="LinkedIn" />
                    <label htmlFor="floatingPassword">LinkedIn</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="GitHub" placeholder="GitHub" />
                    <label htmlFor="floatingPassword">GitHub</label>
                </div>
                <br/>
                <h6>Descripcion</h6>
                <div className="form-floating">
                    <textarea className="form-control" id="Descripcion" placeholder="Descripcion" rows="5"/>
                    <label htmlFor="floatingPassword">Descripcion</label>
                </div>
                <br/>
                <br/>
                <h6>ingresa tu contrseña para confirmar cambios</h6>
                <div className="form-floating">
                    <input type="password" className="form-control" id="ConfContra" placeholder="Confirmar Contraseña" required/>
                    <label htmlFor="floatingPassword">Confirmar contraseña</label>
                </div>

                <br/>
                { !loading && (
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Guardar Cambios</button>
                    <NavLink className="nav-link" to="/perfil">Cancelar</NavLink>
                </div>
                )}
            </form>
            <div className='col-lg-6'>
                <div className="card fond" style={{backgroundImage: `url(${fondito})`}}>
                    <img src={data.foto} className="card-img-top fotPerf" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title nombre">{data.name} {data.last_name}</h5>
                        <br/>
                        <div className="container-fluid">
                            <div className="card datitos col-lg-12" >
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
                        <br/>
                        <div className="card-title descriptext" style={{backgroundColor:'white', opacity:'0.75'}}>
                            {descripcion} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export {EditarPerfil} ;