import React from 'react';

import CardItem from "./CardItem.jsx";
import NameCardItem from "./NameCardItem.jsx";
import PercentValue from "../tables/crypto_currencies/PercentValue.jsx";
import PercentCardItem from "./PercentCardItem.jsx";
import {numberWithCommas} from "../../utils.js";
import classes from './CurrencyCard.module.css'

const CurrencyCard = (props) => {
    const {record} = props

    return (
        <div className={classes.container}>
            <NameCardItem record={record}/>
            <span className={classes.price}>${numberWithCommas(record.quote.USD.price.toFixed(2))}</span>
            <PercentValue
                data={record.quote.USD.percent_change_24h}
                description={"24h"}/>
            <PercentCardItem
                name={'Market cap'}
                percent={record.quote.USD.percent_change_1h}
            >
                ${numberWithCommas(Math.round(record.quote.USD.market_cap))}
            </PercentCardItem>
            <PercentCardItem
                name={'Volume (24h)'}
                percent={record.quote.USD.volume_change_24h}
            >
                ${numberWithCommas(Math.round(record.quote.USD.volume_24h))}
            </PercentCardItem>
            <CardItem name={'Circulating Supply'}>
                {numberWithCommas(Math.round(record.circulating_supply)) + ' ' + record.symbol}
            </CardItem>
            <CardItem name={'Max Supply'}>
                {numberWithCommas(Math.round(record.max_supply)) + ' ' + record.symbol}
            </CardItem>
            <CardItem name={'Fully diluted market cap'}>
                {'$' + numberWithCommas(Math.round(record.quote.USD.fully_diluted_market_cap))}
            </CardItem>
        </div>
    );
};

export default CurrencyCard;
