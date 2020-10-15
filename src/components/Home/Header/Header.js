import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import HireUs from '../HireUs/HireUs';


const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HireUs></HireUs>
        </div>
    );
};

export default Header;