import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://safe-beach-32107.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    
    return (
        <div className="sidebar mt-5 ml-5">
            <Link to="/" className="sidebar-header">
                <img style={{width: '150px', height: '47px'}} src={logo} alt="logo"/>
            </Link>
            {isAdmin ? <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/adminServiceList" className="dashboard-component">
                        <i className="fas fa-hdd"></i> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="dashboard-component">
                        <i className="fas fa-plus"></i> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="dashboard-component">
                        <i className="fas fa-user-plus"></i> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
            :
            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/addOrder" className="dashboard-component">
                        <i className="fas fa-shopping-cart"></i> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customerServiceList" className="dashboard-component">
                        <i className="fas fa-hdd"></i> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="dashboard-component">
                        <i className="far fa-comment-dots"></i> <span>Review</span>
                    </Link>
                </li>
            </ul>
            }
        </div>
    );
};

export default Sidebar;