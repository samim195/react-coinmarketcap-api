import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <h1>{props.c.name}</h1>
        <h2>{props.c.total_supply}</h2>
        <h2>{props.c.symbol}</h2>
    </div>
)