import React from 'react';
import { Link } from 'react-router-dom';
// import './ListBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus, faShoppingBag} from '@fortawesome/free-solid-svg-icons';



const ListBar = () => {
    return (
        <div className="listbar d-flex flex-column justify-content-between col-md-2 py-5 px-4" >
            <ul className="list-unstyled">
                <li>
                    <Link to="/" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-2">
                        <FontAwesomeIcon icon={faShoppingBag} /><span className='ml-3'>List</span> 
                    </Link>
                    <Link to="/admin" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-2">
                        <FontAwesomeIcon icon={faPlus} /><span className='ml-3'>Add</span> 
                    </Link>
                    <Link to="/makeAdmin" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-2">
                        <FontAwesomeIcon icon={faUserPlus} /><span className='ml-3'>Admin</span> 
                    </Link>
                </li>
                
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon  /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default ListBar;