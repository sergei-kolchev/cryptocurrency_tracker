from http_client import CoinMarketCapHTTPClient

from config import settings


cmc_client = CoinMarketCapHTTPClient(
    base_url="https://pro-api.coinmarketcap.com", api_key=settings.CMC_API_KEY
)
