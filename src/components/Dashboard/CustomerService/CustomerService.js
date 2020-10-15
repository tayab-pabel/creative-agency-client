import React, { useContext, useEffect, useState } from 'react';
import './CustomerService.css';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import OrderCard from '../OrderCard/OrderCard';

const CustomerService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch('https://safe-beach-32107.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    
    return (
        <div className="customer-service container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4>Service List</h4>
                    <p>{loggedInUser.name}</p>
                </div>
                <div className="row order-card ml-md-5 ml-0">
                    {
                        orders.map(order =><OrderCard key={order._id} order={order}></OrderCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerService;