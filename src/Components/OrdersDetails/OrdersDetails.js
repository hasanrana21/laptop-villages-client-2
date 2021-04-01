import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrdersDetails.css';

const OrdersDetails = (props) => {
    const { image, name, price, orderDate } = props.order;
    return (
        <div className="order-info row">
            <div className="col-md-5 text-end order-image">
                <img src={image} alt=""/>
            </div>
            <div className="col-md-6 order-txt">
                <h5>{name}</h5>
                <h6>Price: ${price}</h6>
                <h6>Date: {orderDate}</h6>
            </div>
            <div className="col-md-1 order-delete">
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </div>
    );
};

export default OrdersDetails;