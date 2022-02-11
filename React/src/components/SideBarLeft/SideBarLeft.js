import './SideBarLeft.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function SideBarLeft() {
    return ( 
        
        <div className="container izquierda col-lg-2 text-sm-center">
            <div className="card" >
                <ul className="list-group list-group-flush">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/perfil">Perfil</NavLink>
                    </li>
                    <li className="list-group-item"><a href="">Grupos</a></li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/amigos">Personas</NavLink>
                    </li>
                    <li className="list-group-item"><a href="">Mensajes</a></li>
                </ul>
            </div>
            <div className="card border-primary mb-3">
                <div className="card-header">Noticias</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">Don Barredora abre Only Fans</h5>
                    <p className="card-text">El exitoso streamer Don Barredora se vuelve tendencia en redes al publicar que tiene nuevo contenido de patas en la plataforma Only Fans</p>
                    <button>Ver más</button>
                </div>
                <div className="card-body text-primary">
                    <h5 className="card-title">Top 10 de fotos de patas de Don Barredora</h5>
                    <p className="card-text">Te mostramos las imagenes más hot del nuevo contenido de Don Barredora en Only fans</p>
                    <button>Ver más</button>
                </div>
            </div>
        </div>

     );
}

export {SideBarLeft};