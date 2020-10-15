import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="reviews container my-5 py-5">
            <h2 className="text-center mt-5">Clients <span style={{color: '#7AB259'}}>Feedback</span></h2>
            <div className="row my-5">
                {
                    reviews.map(review =><Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;