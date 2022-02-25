import './Nav.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";



function Nav() {
  const [token, saveToken]= useLocalStorage("TOKEN",{})
  const [user, saveUser]= useLocalStorage("USER",{})
  const navigate = useNavigate()
  let dataExist = false
  let dataFotoExist = false

  let data = JSON.parse(window.localStorage.USER)
  if(data.name){
    dataExist = true
    
    document.title= data.name

  }else{
    dataExist = false
  }
  if(data.foto){
    dataFotoExist = true

  }else{
    dataFotoExist = false
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        { dataFotoExist && (
            <img src={data.foto} className='fotito'></img>
        )}
        { !dataFotoExist && (
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqRPBOeet4nYclhDLrDZwF2w2kBObHgLVdg&usqp=CAU" className='fotito'></img>
        )}

        <NavLink className="nav-link" to="/publi">
        
        { dataExist && (
          <>
            <h1>{data.name}</h1>
          </>
         )}
        { !dataExist && (
          <h1>Social Tecla</h1>
        )}
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Pokemon</NavLink>
            </li>
            <li className="nav-item">  
              <NavLink className="nav-link" to="/quotes">Quotes</NavLink>
            </li>
            <li className="nav-item">  
              <NavLink className="nav-link" to="/publi">Feed</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/amigos">Personas</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav" >
            <li className="nav-item" > <a  href="" onClick={()=> {
            saveToken({})
            saveUser({})
            navigate("/login")
          }}> Log Out</a></li>
          </ul>
        </div>
      </div>
  </nav>
  );
}

export {Nav};