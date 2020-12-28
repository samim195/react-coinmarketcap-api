import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.jsx';

export const CardList = (props) => {
    return (<div className='card-list'>
    {
        console.log("vrv"),
        Object.entries(props.cryptos).map(crypto => crypto.map(c => <Card key={c.id} c={c}/>))
    }
    </div>)
}