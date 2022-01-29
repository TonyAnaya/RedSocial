import { Perfil } from "../components/Perfil/Perfil";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { SideBarLeft } from "../components/SideBarLeft/SideBarLeft";
import { SideBarRight } from "../components/SideBarRight/SideBarRight";


function Perf() {
    const [token]= useLocalStorage("TOKEN",{})
    const navigate = useNavigate()
  
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
              <Perfil />
            </div>
            <SideBarRight/>
        </div>

     );
}

export {Perf};