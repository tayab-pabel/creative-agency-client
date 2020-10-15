import React from 'react';
import './OrderList.css';

const OrderList = ({orders}) => {
    return (
        <div className="order-list">
            <table className="table table-borderless">
                <thead>
                    <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    orders.map((order) => 
                            
                        <tr>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.service}</td>
                            <td>{order.description}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;