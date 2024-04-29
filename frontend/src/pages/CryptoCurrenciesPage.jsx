import React, {useEffect, useState} from 'react';

import CryptoCurrenciesTable from "../components/tables/crypto_currencies/CryptoCurrenciesTable.jsx";
import {CurrencyService} from "../API/CurrencyService.js";
import Loader from "../components/loader/Loader.jsx";
import {useFetching} from "../hooks/useFetching.js";

const CryptoCurrenciesPage = () => {
    const [records, setRecords] = useState({});

    const [fetchCurrencies, isLoading, error] = useFetching(async () => {
        const records = await CurrencyService.getAll()
        setRecords(records)
    })

    useEffect(() => {
        fetchCurrencies()
    }, [])

    return (
        <>
            {isLoading
                ? <Loader/>
                : <CryptoCurrenciesTable records={records}/>
            }
        </>
    );
};

export default CryptoCurrenciesPage;
