import React from 'react';
import { Link } from 'react-router-dom';
import './HireUs.css';
import frame from '../../../images/logos/frame.png';

const HireUs = () => {
    return (
        <div className="hire-us container py-5">
            <div className="row">
                <div className="col-md-5 mt-0 mt-md-5 order-1 order-md-0">
                    <h1 className="mt-4">
                        Let’s Grow Your <br/>
                        Brand To The <br/>
                        Next Level
                    </h1>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adipiscing elit. Purus commodo ipsum duis <br/>
                        laoreet maecenas. Feugiat 
                    </p>
                    <Link to="/addOrder" className="btn mt-3">Hire Us</Link>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid" src={frame} alt="frame"/>
                </div>
            </div>
        </div>
    );
};

export default HireUs;