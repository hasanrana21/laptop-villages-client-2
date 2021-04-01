import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';

const Checkout = () => {
    const {_id} = useParams();
    console.log(_id)
    const [selected, setSelected] = useState([]);
    // console.log(selected)

    useEffect(() => {
        fetch('http://localhost:5000/cards')
        .then( response => response.json())
        .then(data => {
            console.log(data);
            setSelected(data);
        })
    }, [])
    const evenData = selected.find(product => product?._id === _id)
    console.log(evenData?.name)
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
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <h4>{evenData?.name}</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>1</h4> 
                    </div>
                    <div className="col-md-3">
                        <h4>${evenData?.price}</h4>
                    </div>
                </div>
                <hr/>
                <div className="checkout-save">
                    <h4 className="text-end">Total: {evenData?.price}</h4>
                    <button className="checkout-btn">SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;