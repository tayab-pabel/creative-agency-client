import React from 'react';
import './Review.css';
import customer from '../../../images/customer-1.png'

const Review = ({review}) => {
    return (
        <div className="col-md-4">
            <div className="review card p-3 mt-3">
                <div className="d-flex">
                    <div className="client-image ">
                        {
                            review.image ? <img src={`data:image/png;base64,${review.image.img}`}/>
                            :
                            <img src={`http://localhost:5000/${review.image}`} alt=""/>
                        }
                    </div>
                    <div className="client-info ml-3 mt-2">
                        <h5 className="mb-0">{review.name}</h5>
                        <p>{review.designation}</p>
                    </div>
                </div>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default Review;