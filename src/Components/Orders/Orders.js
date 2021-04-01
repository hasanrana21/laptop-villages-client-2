import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrdersDetails from '../OrdersDetails/OrdersDetails';
import './Orders.css';

const Orders = () => {
    const [ordered, setOrdered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        console.log(loggedInUser.email)
        fetch('https://apple-cobbler-19312.herokuapp.com/ordered?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrdered(data);
        })
    }, [])
    return (
        <div className="container">
            <h4 className="text-end">My Cart <FontAwesomeIcon icon={faShoppingCart} className="fs-2" />{ordered.length}</h4>
            {
                ordered.map(order => <OrdersDetails order={order} key={order._id}></OrdersDetails>)
            }
        </div>
    );
};

export default Orders;