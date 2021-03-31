import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';

const Checkout = () => {
    const {name} = useParams();
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cards/${name}`)
        .then( res => res.json())
        .then(data => {
            console.log(data);
            setSelected(data);
        })
    }, [])
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
                        <h4>NoteBook Air Xioami {selected.name}</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>1</h4> 
                    </div>
                    <div className="col-md-3">
                        <h4>$1450</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;