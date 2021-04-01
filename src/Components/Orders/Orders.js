import React, { useEffect, useState } from 'react';
import OrdersDetails from '../OrdersDetails/OrdersDetails';
import './Orders.css';

const Orders = () => {
    const [ordered, setOrdered] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ordered')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrdered(data);
        })
    }, [])
    return (
        <div className="container">
            <h4 className="text-end">My Cart {ordered.length}</h4>
            {
                ordered.map(order => <OrdersDetails order={order}></OrdersDetails>)
            }
        </div>
    );
};

export default Orders;