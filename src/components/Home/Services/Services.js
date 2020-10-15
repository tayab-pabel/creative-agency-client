import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('https://safe-beach-32107.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="services container text-center my-5 py-5">
            <h2>Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
            <div className="row mt-5">
                {
                    services.map(service =><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;