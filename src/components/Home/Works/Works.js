import React from 'react';
import ReactDOM from "react-dom";
import './Works.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';


const Works = () => {
    return (
        <div className="works text-center py-5">
            <div className="container pt-5">
                <h2 className="mb-5 pb-4" style={{color: '#FFFFFF'}}>Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
                <div className="works-slide row mt-5">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={50}
                >
                    <img className="img-fluid item mb-5 pb-5" src={carousel1} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel2} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel4} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel2} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel4} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel5} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel4} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel5} alt=""/>
                    <img className="img-fluid item mb-5 pb-5" src={carousel1} alt=""/>
                </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Works />, rootElement);

export default Works;