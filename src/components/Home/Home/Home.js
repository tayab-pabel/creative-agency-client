import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Company from '../Company/Company';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Company></Company>
            <Services></Services>
            <Works></Works>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;