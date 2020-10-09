import React from 'react';
import  './AddSubjectForm.css';
import { Link } from 'react-router-dom';


function AddSubForm(props) {
    return (
        <div className="container formPosition ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title-style">Fill in your Subject</h5>
                <div className="form-group">
                 <input type="text" onChange={props.setSub} id="name" placeholder="Subject Name" className="form-control"></input>
                </div>
                <div className="form-group">
                 <textarea id="desc"  onChange={props.setDesc}  placeholder="Subject Description" className="form-control"></textarea>
                </div>
                <Link to='/' onClick={props.addSub} className="btn btn-success">Add</Link>
            </div>
         </div>
       </div> 
    )
}

export default AddSubForm