
import { Quotes } from "../components/Quotes/Quotes";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Home({ quotesDB }) {
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
        <Quotes quotesDB = {quotesDB} />

      );
}

export {Home};