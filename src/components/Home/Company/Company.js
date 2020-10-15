import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Company = () => {
    return (
        <div className="company container my-5 py-5">
            <div className="row d-flex align-items-center justify-content-center"> 
                <img className="mx-5 my-3" style={{width:'140px', height:'36px'}} src={slack} alt="slack"/>
                <img className="mx-5 my-3" style={{width:'129px', height:'44px'}} src={google} alt="google"/>
                <img className="mx-5 my-3" style={{width:'99px', height:'56px'}} src={uber} alt="uber"/>
                <img className="mx-5 my-3" style={{width:'120px', height:'67px'}} src={netflix} alt="netflix"/>
                <img className="mx-5 my-3" style={{width:'161px', height:'51px'}} src={airbnb} alt="airbnb"/>
            </div>
        </div>
    );
};

export default Company;