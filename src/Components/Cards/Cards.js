import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = (props) => {
    const { name, price, image, company, _id } = props.card;

    return (
        <div className="col-md-3 cards">
            <div className="card-txt">
                <img src={image} alt=""/>
                <h5>{name}</h5>
                <p>by: {company}</p>
            </div>
            <div className="card-bottom d-flex justify-content-center">
                <h4 className="card-price">${price}</h4>
                <Link to={`/checkout/${_id}`} >
                    <button className="btn card-button"><FontAwesomeIcon icon={faShoppingCart}/> Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Cards;