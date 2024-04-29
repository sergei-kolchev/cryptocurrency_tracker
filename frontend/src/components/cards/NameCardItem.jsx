import React from 'react';

import classes from './CurrencyCard.module.css'

const NameCardItem = (props) => {
    const {record} = props
    return (
        <div className={[classes.item, classes.item__name].join(' ')}>
            <img
                className={classes.image}
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${record.id}.png`}
                alt={record.name}
            />
            <h1>{record.name} <span className={classes.name}>{record.symbol}</span>
            </h1>
        </div>
    );
};

export default NameCardItem;
