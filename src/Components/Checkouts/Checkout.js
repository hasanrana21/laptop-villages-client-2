import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="container">
            <h1 className="text-muted">CheckOut...</h1>

            <div className="checkout-table row">
                <div className="col-md-6">
                    <h5>Description</h5>
                </div>
                <div className="col-md-3">
                    <h5>Quantity</h5>
                </div>
                <div className="col-md-3">
                    <h5>Price</h5>
                </div>
            </div>
        </div>
    );
};

export default Checkout;