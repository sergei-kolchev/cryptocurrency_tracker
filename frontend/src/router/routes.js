import CryptoCurrenciesPage from "../pages/CryptoCurrenciesPage.jsx";
import CryptoCurrencyByIdPage from "../pages/CryptoCurrencyByIdPage.jsx";

export const routes = [
    {path: '/cryptocurrencies', element: CryptoCurrenciesPage},
    {path: '/cryptocurrency/:id', element: CryptoCurrencyByIdPage},
]
