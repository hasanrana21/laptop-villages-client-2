import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageProduct.css';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageProduct = (props) => {
    const {name, company, price, _id} = props.product;
    
    const handleDelete = () => {
        // console.log('delete clicked')
    }
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
            <div className="col-md-3 mt-3">
                <span className="edit-icon"> <FontAwesomeIcon icon={faEdit}/></span>
                <span className="delete-icon" onClick={handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt}/></span>
            </div>
        </div>
    );
};

export default ManageProduct;