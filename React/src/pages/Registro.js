import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {apiLogin, searchUser, apiRegister } from '../api/api';
import { useLocalStorage } from "../hooks/useLocalStorage";


function Regis() {
    

    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState({error:false,errorMessage:"Error"})
    const [user, saveUser]= useLocalStorage("USER",{})  
    const [token, saveToken]= useLocalStorage("TOKEN",{})

    const register = async (event) =>{
        event.preventDefault()
        let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqRPBOeet4nYclhDLrDZwF2w2kBObHgLVdg&usqp=CAU"
        let fond = "https://i.blogs.es/0ca5da/ambulo_polar_wide/450_1000.jpg"
        
        let resul = await searchUser(event.target[0].value)
        let array = resul.result

        if(!array[0]){
            console.log("El usuario no existe, eso es bueno porque estamos registrando")
            if(event.target[1].value === event.target[2].value){
                if(!event.target[6].value){
                    console.log("La foto sera default")
                }else {
                    let img = event.target[6].value
                }
                if(!event.target[7].value){
                    console.log("El fondo sera default")
                }else {
                    let fond = event.target[7].value
                }

                let newRegister = {
                    email: event.target[0].value,
                    pass: event.target[1].value,
                    name: event.target[3].value,
                    last_name: event.target[4].value,
                    brd_date: event.target[5].value,
                    foto: img,
                    fondo: fond,
                    pais: event.target[8].value,
                    ciudad: event.target[9].value,
                    link: event.target[10].value,
                    git: event.target[11].value,
                    descri: event.target[12].value
                }

                setLoading(true)


                apiRegister(newRegister)
                
                console.log(newRegister)
                let newLogin = {
                    email: event.target[0].value,
                    pass: event.target[1].value
                }

                let loginResult = await apiLogin(newLogin)
                console.log(loginResult)
                //saveUser(newRegister)
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
                        console.log(window.localStorage.USER)
                        navigate("/publi")
                            
                    }
                }
            }else {
                console.log("No se pudo confirmar la contrase??a")
            }
        }else{
            console.log("El correo introducido ya esta registrado con un usuario")
        }
        
    }
    
    return ( 
        <div className="container">
          <div className="row">
             <div className="col-lg-6 offset-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Favor de introducir datos de Registro</h5>
                        { error.error && (
                            <div className="alert alert-danger text-center" role="alert">
                            <strong>{error.errorMessage}</strong>
                            </div>
                        )}
                        <form onSubmit={register}>
                            <br/>
                            <h6>Introduce tu e-mail</h6>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" autoFocus required/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <br/>
                            <h6>Introduce tu contrase??a</h6>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword_Confirm" placeholder="Confirm Password" required/>
                                <label htmlFor="floatingPassword">Confirm Password</label>
                            </div>
                            <br/>
                            <h6>Introduce tus datos</h6>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput_Name" placeholder="Nombre de usuario" required/>
                                <label htmlFor="floatingPassword">Nombre</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput_Last_Name" placeholder="Apellido de usuario" required/>
                                <label htmlFor="floatingPassword">Apellido</label>
                            </div>
                            <br/>
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="floatingInput_brd_date" placeholder="Nacimiento" required/>
                                <label htmlFor="floatingPassword">Fecha de nacimiento</label>
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
                            { !loading && (
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">Registrar</button>
                                <NavLink className="nav-link" to="/login">Ir a Iniciar Sesion</NavLink>
                            </div>
                            )}
                        </form>

                        { loading && (
                           <div className="text-center">
                            <div className="spinner-grow text-primary" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        )}
                    </div>
                </div>
            </div>
          </div>
        </div>
     );
}

export {Regis};