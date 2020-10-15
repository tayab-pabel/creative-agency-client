import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(service);
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('http://localhost:5000/addService', {
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
        <div className="add-service container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4>Add Service</h4>
                    <p>{loggedInUser.name}</p>
                </div>
                <div className="order-form ml-md-5 ml-0">
                    <form onSubmit={handleSubmit} style={{maxWidth:'1044px'}}>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="title">Service Title</label>
                                <input onBlur={handleBlur} name="title" type="text" id="title" className="form-control" placeholder="Enter title"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="upload-image">
                                    <p className="mb-2">Icon</p>
                                    <label htmlFor="file">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <span className="ml-2">Upload Image</span>
                                    </label>
                                    <input onChange={handleFileChange} name="file" type="file" id="file" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="description">Description</label>
                                <textarea onBlur={handleBlur} name="description" className="form-control" id="description" rows="4" placeholder="Enter Designation"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;