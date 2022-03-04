import { OtroPerfil } from "../components/OtroPerfil/OtroPerfil";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { SideBarLeft } from "../components/SideBarLeft/SideBarLeft";
import { SideBarRight } from "../components/SideBarRight/SideBarRight";


function OtroPerf() {
    const [token]= useLocalStorage("TOKEN",{})
    const navigate = useNavigate()
  
  //Funcion que asegura que el usuario incio sesion
    const getOut = (token) =>{
        if (!token) {
          navigate("/login")
        }
    }
      
    useEffect(()=>{
        getOut(token.token)
    },[])

    return ( 
        <div className=' row col-lg-12' >
            <SideBarLeft/>
            <div className="container col-lg-8 ">
              <OtroPerfil />
            </div>
            <SideBarRight/>
        </div>

     );
}

export {OtroPerf};