import React from 'react';

import PercentValue from "../tables/crypto_currencies/PercentValue.jsx";
import classes from './CurrencyCard.module.css'

const PercentCardItem = (props) => {
    const {name, percent} = props
    return (
        <div className={classes.item}>
            <span className={classes.name}>{name}</span>
            <div>
                <PercentValue
                    data={percent}
                    className={classes.percent}
                />
                <span className={classes.value}>
                    {props.children}
                </span>
            </div>
        </div>
    );
};

export default PercentCardItem;
