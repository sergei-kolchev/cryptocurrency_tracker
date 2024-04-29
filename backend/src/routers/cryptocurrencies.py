from fastapi import APIRouter
from starlette.responses import JSONResponse

from dependencies import cmc_client
from exceptions import CMCException

router = APIRouter(prefix="/cryptocurrencies")


@router.get("")
async def get_cryptocurrencies():
    return await cmc_client.get_currencies()


@router.get("/{currency_id}")
async def get_cryptocurrency(currency_id: int):
    return await cmc_client.get_currency(currency_id)


@router.get("/market-pairs/{currency_id}")
async def get_market_pairs(currency_id: int):
    try:
        return await cmc_client.get_market_pairs(currency_id)
    except CMCException as ex:
        return JSONResponse(
            status_code=403,
            content={"message": str(ex)},
        )
