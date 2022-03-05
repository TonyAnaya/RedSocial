import './Quotes.css';
import { useState } from 'react';

function Quotes({quotesDB}) {

const [quotes,setQuotes] = useState(quotesDB)

const [loading,setLoading] = useState(false)


const onSubmit = (event) => {
    event.preventDefault()
    let newQuote ={
        id: quotes.length + 1,
        author:event.target[0].value,
        quote:event.target[1].value
    }

    setLoading(true)
    setTimeout(()=> {
        setQuotes([...quotes,newQuote])
        event.target.reset()
        setLoading(false)
    },2000)

    
}


  return (
    <div className="container-fluid">
        <div className="container">
          <br/>
        <div className="row">
        {
            quotes.map(q =>(
            <div key={q.id} className="col-lg-3">
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{q.author}</h5>
                    <p className="card-text quote-text"><i>"{q.quote}"</i></p>
                </div>
                </div>
            </div>

              ))
        }
        </div>  
      </div>
        <br/><br/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 offset-md-9">
                    <div className="card">
                        <div className="card-body">
                        <form onSubmit={onSubmit} >
                            <div className="mb-3">
                                <label className="form-label">Author:</label>
                                <input type="text" className="form-control" placeholder="author name" required/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Quote:</label>
                                <textarea className="form-control"  rows="4" placeholder="write your quote:" required></textarea>
                            </div>
                            { !loading && (
                                <div className="d-grid gap-2">
                                     <button className="btn btn-primary btn-block">Add</button>
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
    </div>
  );
}

export {Quotes};