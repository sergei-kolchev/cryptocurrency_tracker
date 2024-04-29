<p align="center">
      <img src="https://i.ibb.co/kMPxB0Z/logo.png" alt="Crypto Tracker" width="645">
</p>

<p align="center">   
   <img src="https://img.shields.io/badge/FastAPI-python-blue?logo=React" alt="FastAPI">
   <img src="https://img.shields.io/badge/React-18-blue?logo=React" alt="React">
   <img src="https://img.shields.io/badge/License-MIT-success" alt="License">
</p>


## About

CryptoTracker is a website that provides information and data such as prices, trade volumes, market capitalization on cryptocurrencies.

Stack

    FastAPI + pydantic, pydantic-settings, aiohttp
    React + axios, ant design


## Installation

Create file `backend/src/.env` (example - .env.example)

    CMC_API_KEY=key from https://coinmarketcap.com

Backend

    python3 -m venv venv
    . venv/bin/activate
    pip install -r requirements.txt
    uvicorn src.main:app --reload

Frontend

    npm create vite@latest
    npm install
    npm run dev


## Developers

- [sergei-kolchev](https://github.com/sergei-kolchev)

## License

The project is distributed under the MIT license.