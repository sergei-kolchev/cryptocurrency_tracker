import React from 'react';

import classes from './CryptoCurrencyCell.module.css';

const CryptoCurrenciesCell = (props) => {
    if (props.data) {
        return (
            <div className={classes.container}>
                {props.bold
                    ?
                    <b>{props.data}</b>
                    :
                    <span>{props.data}</span>
                }
            </div>
        )
    }
    return (
        <div className={classes.container}>
            <span>{props.children}</span>
        </div>
    )
}

export default CryptoCurrenciesCell;
