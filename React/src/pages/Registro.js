import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {apiLogin} from '../api/api';
import { useLocalStorage } from "../hooks/useLocalStorage";
function Regis() {

    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState({error:false,errorMessage:"Error"})
    const [user, saveUser]= useLocalStorage("USER",{})  
    const [token, saveToken]= useLocalStorage("TOKEN",{})


    const login = async (event) =>{
        event.preventDefault()
        let newLogin = {
            email: event.target[0].value,
            pass: event.target[1].value
        }
        setLoading(true)

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
                console.log(window.localStorage.USER)
                navigate("/publi")
                    
            }
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
                        <form onSubmit={login}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" autoFocus required/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword_Confirm" placeholder="Password" required/>
                                <label htmlFor="floatingPassword">Confirm Password</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput_Name" placeholder="Nombre de usuario" required/>
                                <label htmlFor="floatingPassword">Nombre</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput_Last_Name" placeholder="Nombre de usuario" required/>
                                <label htmlFor="floatingPassword">Apellido</label>
                            </div>

                            <br/>
                            { !loading && (
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">Registrar</button>
                                <NavLink   NavLink className="nav-link" to="/login">Ir a Iniciar Sesion</NavLink>
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