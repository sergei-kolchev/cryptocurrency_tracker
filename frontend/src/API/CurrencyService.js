import axios from "axios";

import {settings} from "../config.js";

export class CurrencyService {
    static base_url = settings.backend_url

    static get_url = (path) => {
        return this.base_url + path
    }

    static getAll = async () => {
        const response = await axios.get(
            this.get_url("/cryptocurrencies")
        )
        return response.data
    }

    static getById = async (id) => {
        const response = await axios.get(
            this.get_url(`/cryptocurrencies/${id}`)
        )
        return response.data
    }

    static getMarketsById = async(id) => {
        const response = await axios.get(
            this.get_url(`/cryptocurrencies/market-pairs/${id}`)
        ).catch((error) => {
            throw new Error(error.response.data.message)
        })
        return response.data
    }
}
