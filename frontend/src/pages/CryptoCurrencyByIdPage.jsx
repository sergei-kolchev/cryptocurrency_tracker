import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {CurrencyService} from "../API/CurrencyService.js";
import Loader from "../components/loader/Loader.jsx";
import CurrencyCard from "../components/cards/CurrencyCard.jsx";
import classes from "./CryptoCurrencyByIdPage.module.css";
import CurrencyTable from "../components/tables/currency/CurrencyTable.jsx";
import {useFetching} from "../hooks/useFetching.js";

const CryptoCurrencyByIdPage = () => {
    const params = useParams()
    const [record, setRecord] = useState({});
    const [markets, setMarkets] = useState({});

    const [fetchCurrency, isLoading, error] = useFetching(async (id) => {
        const response = await CurrencyService.getById(id)
        setRecord(response)
    })

    const [fetchMarkets, isMarketsLoading, errorMarkets] = useFetching(async (id) => {
        const response = await CurrencyService.getMarketsById(id)
        setMarkets(response.data)
    })

    useEffect(() => {
        fetchCurrency(params.id)
        fetchMarkets(params.id)
    }, [])

    return (
        <div className={classes.container}>
            {isLoading
                ?   <Loader/>
                :   <CurrencyCard record={record}/>

            }
            {isMarketsLoading
                ?   <Loader/>
                :   <>
                        {errorMarkets
                            ?  <span style={{color: "red"}}>{errorMarkets}</span>
                            :  <CurrencyTable markets={markets}/>
                        }
                    </>
            }
        </div>
    )
};

export default CryptoCurrencyByIdPage;
