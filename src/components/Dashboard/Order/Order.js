import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newOrder = { ...order };
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }
    
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(order);
        formData.append('file', file);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('service', order.service);
        formData.append('description', order.description);
        formData.append('price', order.price);

        fetch('https://safe-beach-32107.herokuapp.com/addOrder', {
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
        <div className="order container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4>Order</h4>
                    <p>{loggedInUser.name}</p>
                </div>
                <div className="order-form ml-md-5 ml-0">
                    <form onSubmit={handleSubmit} style={{maxWidth:'570px'}}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" name="name" className="form-control form-control-lg" placeholder="Your name / company’s name"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" name="email" className="form-control form-control-lg" placeholder="Your email address"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" name="service" className="form-control form-control-lg" placeholder="Service Name (Ex. Graphic Design)"/>
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} name="description" className="form-control form-control-lg" rows="4" placeholder="Project Details"></textarea>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <input onBlur={handleBlur} type="text" name="price" className="form-control form-control-lg" placeholder="Price"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="file">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                    <span className="ml-2">Upload project file</span>
                                </label>
                                <input onChange={handleFileChange} type="file" name="file" id="file" className="form-control form-control-lg"/>
                            </div>
                        </div>
                        <button type="submit" className="btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;