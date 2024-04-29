import React from 'react';

import classes from './CurrencyCard.module.css'

const CardItem = (props) => {
    return (
        <div className={classes.item}>
            <span className={classes.name}>{props.name}</span>
            <span className={classes.value}>{props.children}</span>
        </div>
    );
};

export default CardItem;
