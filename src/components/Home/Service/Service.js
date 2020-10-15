import React from 'react';
import './Service.css';
import service1 from '../../../images/icons/service1.png';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    return (
        <div className="col-md-4 p-4">
            <Link to="/addOrder" className="service-link">
                <div className="service p-4 m-2">
                    {
                        service.icon ? <img className="img" src={`data:icon/png;base64,${service.icon.img}`}/>
                        :
                        <img className="img" src={`https://safe-beach-32107.herokuapp.com/${service.icon}`} alt=""/>
                    }  
                    <h5 className="mt-4">{service.title}</h5>
                    <p className="mt-3">{service.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Service;