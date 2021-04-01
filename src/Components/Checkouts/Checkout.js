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

    const saveOrder = () => {
        const orderData = {...selected};
        console.log(evenData)
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(evenData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    const evenData = selected.find(product => product?._id === _id)
    console.log(evenData?.name)
    return (
        <div className="container">
            <h1 className="text-muted">CheckOut...</h1>

                <div className="checkout-table d-flex justify-content-between">
                    <h5>Description</h5>
                    <h5>Quantity</h5>
                    <h5>Price</h5>
                </div>
                        <hr/>
                <div className="d-flex justify-content-between">
                    <h4>{evenData?.name}</h4>
                    <h4 className="w-25">1</h4> 
                    <h4>${evenData?.price}</h4>
                </div>
                        <hr/>
                <div className="checkout-save">
                    <h4 className="text-end">Total= ${evenData?.price}</h4>
                    <button className="checkout-btn" onClick={saveOrder}>SAVE</button>
                </div>
        </div>
    );
};

export default Checkout;