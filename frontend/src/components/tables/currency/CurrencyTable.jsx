import React from 'react';

import {Table} from "antd";

import CryptoCurrenciesCell
from "../crypto_currencies/CryptoCurrenciesCell.jsx";
import classes from "../crypto_currencies/CryptoCurrenciesTable.module.css";
import {numberWithCommas, parseISOString} from "../../../utils.js";

const CurrencyTable = (props) => {
    const {markets} = props
    const market_pairs = markets.market_pairs

    const columns = [
        {
            title: 'Exchange',
            dataIndex: ['exchange', 'name'],
            align: 'center',
            width: '10%',
            sorter: (a, b) => a.exchange.name.localeCompare(b.exchange.name),
            render: (name, record) => (
                <div className={classes.nameField}>
                    <img className={classes.image} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${record.exchange.id}.png`} alt={record.name}/>
                    <span style={{textAlign: 'left'}}>{name}</span>
                </div>
            )
        },
        {
            title: 'Pair',
            dataIndex: ['market_pair'],
            sorter: (a, b) => a.market_pair.localeCompare(b.market_pair),
            render: (quote, record) => {
                return <CryptoCurrenciesCell
                    data={record.market_pair}
                    bold={true}
                />
            },
            align: 'center',
            width: '15%',
        },
        {
            title: 'Price',
            dataIndex: ['quote', 'USD', 'price'],
            render: (quote, record) => {
                return <CryptoCurrenciesCell
                    data={`$${numberWithCommas(record.quote.USD.price.toFixed(2))}`}
                    bold={true}
                />
            },
            sorter: (a, b) => a.quote.USD.price - b.quote.USD.price,
            align: 'center',
            width: '15%',
        },
        {
            title: 'Volume (24h)',
            dataIndex: ['quote', 'USD', 'volume_24h'],
            render: (quote, record) => {
                return <CryptoCurrenciesCell
                    data={`$${numberWithCommas(Math.round(record.quote.USD.volume_24h))}`}
                />
            },
            sorter: (a, b) => a.quote.USD.volume_24h - b.quote.USD.volume_24h,
            align: 'center',
        },
        {
            title: 'Updated',
            dataIndex: ['quote', 'exchange_reported', 'last_updated'],
            sorter: (a, b) => a.quote.exchange_reported.last_updated.localeCompare(b.quote.exchange_reported.last_updated.name),
            render: (name, record) => (
                <span>{parseISOString(record.quote.exchange_reported.last_updated).toLocaleString()}</span>
            ),
            align: 'center',
        }
    ]

    return (
        <div style={{
            width: "auto",
            borderLeft: "1px solid #e9e9e8",
            margin: "0 10px"
        }}>
            <Table
                style={{margin: "10px"}}
                columns={columns}
                dataSource={market_pairs}
                rowKey="id"
            />
        </div>
    );
};

export default CurrencyTable;
