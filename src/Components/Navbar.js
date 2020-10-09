import React from 'react'
import  './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="container navbar fixed-top navbar-expand-md navbar-light bg-light">
            <div className="row">
                <div className="col-sm-8">
                <h1 id="title">Voting App</h1>
                </div>
                <div className="col-sm-2 navcontent ">
                <Link to='/' className="navcolor">Home</Link>
                </div>
                <div className="col-sm-2 navcontent">
                <Link to='/VotePage' className="navcolor">Vote</Link>
                </div>
               
               
            
            </div>
       
      </div>
    )
}

export default Navbar
