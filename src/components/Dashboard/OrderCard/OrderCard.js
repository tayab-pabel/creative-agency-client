import React from 'react';
import './OrderCard.css';

const OrderCard = ({order}) => {
    return (
        <div className="col-md-4">
            <div className="order-card p-5">
                {
                    order.image ? <img className="img" src={`data:image/png;base64,${order.image.img}`}/>
                    :
                    <img className="img" src={`http://localhost:5000/${order.image}`} alt=""/>
                }  
                <h5 className="mt-4">{order.service}</h5>
                <p className="mt-3">{order.description}</p>
            </div>
        </div>
    );
};

export default OrderCard;