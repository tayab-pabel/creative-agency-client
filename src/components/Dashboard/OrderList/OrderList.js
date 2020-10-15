import React from 'react';

const OrderList = ({order}) => {
    return (
        <div className="row">
            <div className="col-3">
                <p>{order.name}</p>
            </div>
            <div className="col-3">
                <p>{order.email}</p>
            </div>
            <div className="col-3">
                <p>{order.service}</p>
            </div>
            <div className="col-3">
                <p>{order.description}</p>
            </div>
        </div>
        
    );
};

export default OrderList;