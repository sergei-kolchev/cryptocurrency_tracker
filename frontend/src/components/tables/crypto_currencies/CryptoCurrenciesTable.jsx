import {Button, Input, Space, Table} from "antd";

import classes from './CryptoCurrenciesTable.module.css';
import CryptoCurrenciesCell
from "./CryptoCurrenciesCell.jsx";
import {numberWithCommas} from "../../../utils.js";
import {Link} from "react-router-dom";
import PercentValue from "./PercentValue.jsx";
import {useSearchProps} from "../../../hooks/useSearchProps.jsx";

const CryptoCurrenciesTable = (props) => {
    const {records} = props

    const columns = [
        {
            title: '#',
            dataIndex: ['cmc_rank'],
            render: (quote, record) => {
                return <CryptoCurrenciesCell
                    data={record.cmc_rank}
                    bold={true}
                />
            },
            sorter: (a, b) => a.cmc_rank - b.cmc_rank,
            width: '5%',
        },
        {
        title: 'Name',
        dataIndex: 'name',
        ...useSearchProps('name'),
        render: (name, record) => (
            <div className={classes.nameField}>
                <img className={classes.image} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${record.id}.png`} alt={record.name}/>
                <span style={{textAlign: 'left'}}><Link to={'/cryptocurrency/' + record.id}>{name}</Link></span>
                <span className={classes.symbol}>{record.symbol}</span>
            </div>
        ),
          sorter: (a, b) => a.name.localeCompare(b.name),
          width: '20%',
          align: 'center',
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
            width: '10%',
            align: 'center',
        },
        {
            title: '1h %',
            dataIndex: ['quote', 'USD', 'percent_change_1h'],
            render: (quote, record) => (
                <CryptoCurrenciesCell>
                     <PercentValue data={record.quote.USD.percent_change_1h}></PercentValue>
                </CryptoCurrenciesCell>
            ),
            sorter: (a, b) => a.quote.USD.percent_change_1h - b.quote.USD.percent_change_1h,
            align: 'center',
        },
        {
            title: '24h %',
            dataIndex: ['quote', 'USD', 'percent_change_24h'],
            render: (quote, record) => (
                <CryptoCurrenciesCell>
                     <PercentValue data={record.quote.USD.percent_change_24h}></PercentValue>
                </CryptoCurrenciesCell>
            ),
            sorter: (a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h,
            align: 'center',
        },
        {
            title: '7d %',
            dataIndex: ['quote', 'USD', 'percent_change_7d'],
            render: (quote, record) => (
                <CryptoCurrenciesCell>
                     <PercentValue data={record.quote.USD.percent_change_7d}></PercentValue>
                </CryptoCurrenciesCell>
            ),
            sorter: (a, b) => a.quote.USD.percent_change_7d - b.quote.USD.percent_change_7d,
            align: 'center',
        },
        {
            title: 'Market Cap',
            dataIndex: ['quote', 'USD', 'market_cap'],
            render: (quote, record) => {
                return <CryptoCurrenciesCell
                    data={`$${numberWithCommas(record.quote.USD.market_cap)}`}
                />
            },
            sorter: (a, b) => a.quote.USD.market_cap - b.quote.USD.market_cap,
            align: 'center',
        },
        {
            title: 'Volume(24h)',
            dataIndex: ['quote', 'USD', 'volume_24h'],
            render: (quote, record) => {
                return <CryptoCurrenciesCell
                    data={`$${numberWithCommas(record.quote.USD.volume_24h)}`}
                />
            },
            sorter: (a, b) => a.quote.USD.volume_24h - b.quote.USD.volume_24h,
            align: 'center',
        },
        {
            title: 'Circulating Supply',
            dataIndex: ['circulating_supply'],
            render: (quote, record) => {
                return <CryptoCurrenciesCell
                    data={`$${numberWithCommas(record.circulating_supply)} ${record.symbol}`}
                />
            },
             sorter: (a, b) => a.circulating_supply - b.circulating_supply,
            align: 'center',
        },
    ];

    return (
      <div>
        <Table
            columns={columns}
            dataSource={records}
            rowKey="id"
        />
      </div>
    );
};

export default CryptoCurrenciesTable;
