import './Publi.css';
import { useState ,useEffect } from 'react';
import { apiPubli, savePubli } from '../../api/api';
import { useLocalStorage } from "../../hooks/useLocalStorage";


function Publi() {

    const [publi,setPubli] = useState([])
    const [loading, setLoading] = useState(false)
    const [token]= useLocalStorage("TOKEN",{})


    const printPub = async (token) => {
        const publiBak = await apiPubli(token)
        setPubli(publiBak[0])
   }
    useEffect(()=>{
        printPub(token.token)
    },[])

    const onSubmit = async  (event) => {
        event.preventDefault()
        console.log(JSON.parse(window.localStorage.USER))
        let newState = {
            name: JSON.parse(window.localStorage.USER).name,
            publi: event.target[0].value,
            imag: JSON.parse(window.localStorage.USER).foto
       }
       
        console.log(await savePubli(JSON.parse(window.localStorage.USER).name,  event.target[0].value, JSON.parse(window.localStorage.USER).foto))
        setLoading(true)
        setTimeout(() => {
            setPubli([...publi, newState])
            event.target.reset()
            setLoading(false)
        }, 2000);
    }
  return (
    <div className="container-fluid row col-lg-12">
        
        <div className="container col-lg-12 ">
            
        <div className="container  col-lg-12 ">
            <br/>
            <br/>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Que estas pensando?</label>
                                <textarea className="form-control"  rows="2" placeholder="Tu publicación va aqui:"  maxLength="50"required></textarea>
                            </div>
                            {!loading &&
                            <button type="submit" className="btn btn-primary">Publicar</button>
                            }
                        </form>
                        {loading && (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden text-secondary">Loading...</span> 
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div className="row">
        {
            publi.slice(0).reverse().map(q =>(
            <div key={q.id} className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <img className="imagenes" src={q.imag}></img>
                        <h5 className="card-title">{q.name}</h5>
                        <p className="card-text Publi-text">{q.publi}</p>
                    </div>
                </div>
            </div>
            ))
        }
        </div>
        <br/>
        <br/>
        </div>
    </div>
  );
}

export {Publi};