import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Home.css';


const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
            console.log(data)
        })
    }, [])
    return (
        <div className="row container m-auto">
            {
                cards.map(card => <Cards card={card} key={card._id}></Cards>)
            }
        </div>
    );
};

export default Home;