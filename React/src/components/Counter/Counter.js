
import { useState } from 'react';
import './Counter.css';

function Counter() {

    const [state, setState] = useState({counter: 0,title:"Contador de estado",color:"blue"})  

    const add = () =>{
        let newState = {
            ...state,
            counter: state.counter + 1, 
        }
        setState(newState)
    }

    const substract = () =>{
        let newState = {
            ...state,
            counter: state.counter - 1, 
        }
        setState(newState)
    }

    const reset = () =>{
        let newState = {
            ...state,
            counter: 0, 
        }
        setState(newState)
    }


    const setColor = (event) =>{
        let newState = {
            ...state,
            color: event.target.value
        }
        setState(newState)
    }
    const isEven = state.counter % 2 === 0
    const message = isEven ? "Is Even" : "Is Odd"
  return (
<div className='container text-center'>
   <br />
   <div className='card'>
      <div className='card-body'>
         <h3>Counter</h3>
         <h3>{state.counter}</h3>
         <h4>{message}</h4>
         <br />
         <div className='row'>
            <div className='col-sm-4'>
               <button className='btn btn-primary' onClick={add}> <i className="fas fa-plus-circle"></i> Agregar</button>
            </div>
            <div className='col-sm-4'>
               <button className='btn btn-primary' onClick={substract}> <i className="fas fa-plus-circle"></i> Restar</button>
            </div>
            <div className='col-sm-4'>
               <button className='btn btn-danger' onClick={reset}> <i className="fas fa-toilet"></i> Reset</button>
            </div>
         </div>
         <br />
      </div>
   </div>
   <br />
</div>
  );
}

export {Counter};