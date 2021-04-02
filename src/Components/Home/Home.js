import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Home.css';


const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://apple-cobbler-19312.herokuapp.com/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
    }, [])
    return (
        <div className="row container m-auto">
            {
                cards.map(card => <Cards card={card} key={card._id}></Cards>)
            }
            <div class="spinner-border text-info spinner" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Home;