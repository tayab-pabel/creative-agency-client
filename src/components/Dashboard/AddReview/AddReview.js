import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddReview.css';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(review);
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('designation', review.designation);
        formData.append('description', review.description);

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    return (
        <div className="add-review container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4>Write a review</h4>
                    <p>{loggedInUser.name}</p>
                </div>
                <div className="order-form  ml-md-5 ml-0">
                    <form onSubmit={handleSubmit} style={{maxWidth:'570px'}}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <input onBlur={handleBlur} name="name" type="text" className="form-control form-control-lg" placeholder="Your name"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <div className="upload-image">
                                        <label htmlFor="file">
                                            <i className="fas fa-cloud-upload-alt"></i>
                                            <span className="ml-2">Upload Your Image</span>
                                        </label>
                                        <input onChange={handleFileChange} name="file" type="file" id="file" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} name="designation" type="text" className="form-control form-control-lg" placeholder="Designation, Company’s name"/>
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} name="description" className="form-control form-control-lg" rows="4" placeholder="Description"></textarea>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;