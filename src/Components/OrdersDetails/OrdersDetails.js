import React from 'react';
import './OrdersDetails.css';

const OrdersDetails = (props) => {
    const { image, name, price, orderDate } = props.order;
    return (
        <div className="order-info row">
            <div className="col-md-5 text-end order-image">
                <img src={image} alt=""/>
            </div>
            <div className="col-md-7 order-txt">
                <h5>{name}</h5>
                <h6>Price: ${price}</h6>
                <h6>Date: {orderDate}</h6>
            </div>
        </div>
    );
};

export default OrdersDetails;