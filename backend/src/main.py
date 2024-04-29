from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from routers.cryptocurrencies import router as cryptocurrencies_router


origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app = FastAPI()
app.include_router(cryptocurrencies_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
