import './SideBarRight.css'


function SideBarRight() {
    return ( 
        
        <div className="container col-lg-2 derecha">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Grupo de fotos de Patas de Don Barre</h5>
                    <p className="card-text">Comparte tu gusto por las patas de Don Barre</p>
                    <a href="#" className="btn btn-primary">Unirte</a>
                </div>
            </div>
        
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Chismes de Don Barre</h5>
                    <p className="card-text">Grupo hecho para chismear sobre Don Barre</p>
                    <a href="#" className="btn btn-primary">Unirte</a>
                </div>
            </div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Club de fans de Don Barre</h5>
                    <p className="card-text">Barresaurios oficiales</p>
                    <a href="#" className="btn btn-primary">Unirte</a>
                </div>
            </div>
        </div>

     );
}

export {SideBarRight};