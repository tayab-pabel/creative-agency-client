import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddAdmin.css';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', admin.email);

        fetch('https://safe-beach-32107.herokuapp.com/addAdmin', {
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
        <div className="add-admin container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4>Add Admin</h4>
                    <p>{loggedInUser.name}</p>
                </div>
                <div className="order-form ml-md-5 ml-0">
                    <form onSubmit={handleSubmit} style={{maxWidth:'1044px'}}>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleBlur} name="email" type="email" id="email" className="form-control" placeholder="Enter email"/>
                            </div>
                            <div className="col-3 pl-0">
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;