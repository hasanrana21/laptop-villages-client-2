import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageProduct = (props) => {
    const {name, company, price, _id} = props.product;
    const [deleted, setDeleted] = useState();

    // useEffect(() =>{
        
        
    // }, [])

    // const handleDelete = (id) => {
    //     console.log('delete clicked', id)
    //     fetch('https://apple-cobbler-19312.herokuapp.com/delete/'+id,{
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("deleted successfully", data)
    //         setDeleted(data);
    //     })
    // }
    // console.log(deleted);
    return (
        <div className="row manage-products">
            <div className="col-md-3">
                <h6>{name}</h6>
            </div>
            <div className="col-md-3 align">
                <h6>{company}</h6>
            </div>
            <div className="col-md-3 align">
                <h6>${price}</h6>
            </div>
            <div className="col-md-3 mt-3 align">
                <span className="edit-icon"> <FontAwesomeIcon icon={faEdit}/></span>
                <span className="delete-icon"><FontAwesomeIcon icon={faTrashAlt}/></span>
            </div>
        </div>
    );
};

export default ManageProduct;