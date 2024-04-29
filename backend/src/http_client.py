from aiohttp import ClientSession
from async_lru import alru_cache

from exceptions import CMCException


class HTTPClient:
    def __init__(self, base_url: str, api_key: str):
        self._session = ClientSession(
            base_url=base_url, headers={"X-CMC_PRO_API_KEY": api_key}
        )


class CoinMarketCapHTTPClient(HTTPClient):
    @alru_cache
    async def get_currencies(self):
        async with self._session.get(
                "/v1/cryptocurrency/listings/latest"
        ) as response:
            result = await response.json()
            return result["data"]

    @alru_cache
    async def get_currency(self, currency_id):
        async with self._session.get(
            "/v2/cryptocurrency/quotes/latest",
                params={"id": currency_id}
        ) as response:
            result = await response.json()
            return result["data"][str(currency_id)]

    @alru_cache
    async def get_market_pairs(self, currency_id):
        async with self._session.get(
            " /v2/cryptocurrency/market-pairs/latest",
                params={"id": currency_id}
        ) as response:
            result = await response.json()
            if int(result["status"]["error_code"]):
                raise CMCException(result["status"]["error_message"])  # 1006
            return result["data"][str(currency_id)]
