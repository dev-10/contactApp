import React from 'react'
import { Link } from "react-router-dom";
function Navigation(props) {
    return (
        <React.Fragment>
            <div className='col-md-2'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link to={`/contacts/edit/${props.id}`} className='btn btn-warning'>
                            <i class='fa fa-pen' aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to={`/contacts/view/${props.id}`} className='btn btn-success'>
                            <i class='fa fa-eye' aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to={`/contacts/delete/${props.id}`} className='btn btn-danger'>
                            <i class='fa fa-trash' aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Navigation