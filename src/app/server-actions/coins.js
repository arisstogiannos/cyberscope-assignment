"use server";
import { unstable_cache } from "next/cache";

// This file runs on the server/backend (equivalent to an api endpoint)

export const getCoinsCached = unstable_cache(getCoins, ["coins"], {
  tags: ["coins"],
  revalidate: 60, // Match the revalidate time with the api update frequency
});

async function getCoins(page = 1, coinsPerPage = 20) {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=${process.env.COINGKEKO_API_KEY}&vs_currency=usd&per_page=${coinsPerPage}&page=${page}`;
    const options = { method: "GET", headers: { accept: "application/json" } };
    const response = await fetch(url, options);
    const coins = await response.json();
    return coins.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      current_price: coin.current_price,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const getCoinCached = unstable_cache(getCoin, ["coin"], {
  tags: ["coin"],
  revalidate: 60,
});

async function getCoin(id) {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${process.env.COINGKEKO_API_KEY}&tickers=false&community_data=false&developer_data=false`;
    const options = { method: "GET", headers: { accept: "application/json" } };
    const response = await fetch(url, options);
    const coin = await response.json();

    return {
      id: coin.id,
      name: coin.name,
      market_data: {
        current_price: coin.market_data.current_price.usd,

        high_24h: coin.market_data.high_24h.usd,

        low_24h: coin.market_data.low_24h.usd,

        price_change_percentage_24h_in_currency:
          coin.market_data.price_change_percentage_24h_in_currency.usd,

        price_change_percentage_7d_in_currency:
          coin.market_data.price_change_percentage_7d_in_currency.usd,

        price_change_percentage_14d_in_currency:
          coin.market_data.price_change_percentage_14d_in_currency.usd,

        price_change_percentage_30d_in_currency:
          coin.market_data.price_change_percentage_30d_in_currency.usd,

        price_change_percentage_60d_in_currency:
          coin.market_data.price_change_percentage_60d_in_currency.usd,

        price_change_percentage_200d_in_currency:
          coin.market_data.price_change_percentage_200d_in_currency.usd,

        price_change_percentage_1y_in_currency:
          coin.market_data.price_change_percentage_1y_in_currency.usd,
      },
      description: coin.description.en,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}
