import React from 'react'
import './Subjects.css';
import { Link } from 'react-router-dom';

function VoteList(props) {
    return (
        <div className="container subposition ">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Place your Vote..</h5>
                    {props.subjectList.map(x => {
                        if (x.flag == 1)
                            return (

                                <div className="row card-text form-group">
                                    <div className="col-sm-6">{x.subName}{x.count}</div>
                                    <div className="col-sm-6">
                                        <button className="btn btn-danger" onClick={() => props.setCount(x.id)}>Vote</button>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}

export default VoteList
