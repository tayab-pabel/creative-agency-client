import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';
import './AdminService.css';

const AdminService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch('https://safe-beach-32107.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    
    return (
        <div className="admin-service container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4 className="ml-md-5 mb-0">Service List</h4>
                    <p>{loggedInUser.name}</p>
                </div>
                <div className="service-table ml-md-5 ml-0">
                    <OrderList key={orders._id} orders={orders}></OrderList>
                </div>
            </div>
        </div>
    );
};

export default AdminService;