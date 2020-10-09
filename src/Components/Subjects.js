import React from 'react'
import './Subjects.css';
import { Link } from 'react-router-dom';

function Subjects(props) {
  let subjects = props.subjects;

  return (
    <div className="container subposition ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Subject List</h5>
          {subjects.map(x => {
            if (x.flag == 0) {
              return (
                <div className="row card-text form-group">
                  <div className="col-sm-6">{x.subName}</div>
                  <div className="col-sm-6">
                    <button className="btn btn-primary" id={x.id} onClick={()=>props.setFlag(x.id)}>Activate</button></div>
                </div>)
            }
            else return (
              <div className="row card-text form-group">
                <div className="col-sm-6">{x.subName}</div>
                <div className="col-sm-6">
                  <button className="btn" onClick={()=>props.setFlag(x.id)}>Inactivate</button>
                </div>
              </div>
            )
          })}

          <Link to='/AddSubPage' className="btn btn-success add_btn_pos">Add Subject</Link>
        </div>
      </div>
    </div>
  )
}

export default Subjects