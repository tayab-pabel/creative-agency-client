import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="img-fluid logo" src={logo} alt="Logo"/>
                </Link>
                <Link className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-4" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="#">Contact Us</Link>
                    </li>
                    </ul>
                    <Link className="btn" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;