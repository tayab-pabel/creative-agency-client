import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';
import './AdminService.css';

const AdminService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    
    return (
        <div className="admin-service container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4 className="ml-md-5 mb-0">Service List</h4>
                    <p className="text-dark">{loggedInUser.name}</p>
                </div>
                <div className="service-table ml-md-5 ml-0">
                    <div className="row">
                        <div className="col-3">
                            <p>Name</p>
                        </div>
                        <div className="col-3">
                            <p>Email ID</p>
                        </div>
                        <div className="col-3">
                            <p>Service</p>
                        </div>
                        <div className="col-3">
                            <p>Project Details</p>
                        </div>
                    </div>
                    <div className="order-list">
                        {
                            orders.map(order =><OrderList key={order._id} order={order}></OrderList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminService;