import React from 'react';
import './ManageProduct.css';

const ManageProduct = (props) => {
    const {name, company, price} = props.product;
    return (
        <div className="row manage-products">
            <div className="col-md-3">
                <h6>{name}</h6>
            </div>
            <div className="col-md-3">
                <h6>{company}</h6>
            </div>
            <div className="col-md-3">
                <h6>${price}</h6>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
};

export default ManageProduct;