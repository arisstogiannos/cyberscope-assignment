import { getCoinCached } from "@/app/server-actions/coins";
import BackButton from "@/components/back-button";
import DescriptionCard from "@/components/description-card";
import Caret from "@/components/icons/caret";
import ViewdCoinTracker from "@/components/viewed-coin-tracker";

export default async function Page({ params }) {
  const coinId = (await params).id;

  if (!coinId) {
    return (
      <div className=" w-full h-screen text-xl flex flex-col gap-4 items-center justify-center">
        Coin Not Found
        <BackButton />
      </div>
    );
  }

  const coin = await getCoinCached(coinId);

  if (!coin) {
    return (
      <div className=" w-full h-screen text-xl flex flex-col gap-4 items-center justify-center">
        Coin Not Found
        <BackButton />
      </div>
    );
  }

  const timeframes = [
    {
      label: "24 Hours",
      value: coin.market_data.price_change_percentage_24h_in_currency,
    },
    {
      label: "7 Days",
      value: coin.market_data.price_change_percentage_7d_in_currency,
    },
    {
      label: "14 Days",
      value: coin.market_data.price_change_percentage_14d_in_currency,
    },
    {
      label: "1 Month",
      value: coin.market_data.price_change_percentage_30d_in_currency,
    },
    {
      label: "2 Months",
      value: coin.market_data.price_change_percentage_60d_in_currency,
    },
    {
      label: "200 Days",
      value: coin.market_data.price_change_percentage_200d_in_currency,
    },
    {
      label: "1 Year",
      value: coin.market_data.price_change_percentage_1y_in_currency,
    },
  ];

  return (
    <main className=" min-h-screen w-full flex items-center py-20 justify-center ">
      <div className="flex flex-col p-8  bg-white/5 rounded-xl">
        <BackButton />
        <h1 className="text-4xl">{coin.name}</h1>
        <span className="mt-3 text-xl text-white/70">
          {coin.market_data.current_price?.toLocaleString("en-EN") ?? "N/A"}$
        </span>
        <div className="grid gap-5 grid-cols-2 max-w-80 mt-10 ">
          <div className="bg-gradient-to-br grid rounded-xl gap-4 from-green-600/40 p-3 to-green-800/30">
            Highest 24h
            <span>
              {coin.market_data.high_24h?.toLocaleString("en-EN") ?? "N/A"}$
            </span>
          </div>
          <div className="bg-gradient-to-br grid rounded-xl gap-4 from-red-700/40 p-3 to-red-900/30">
            Lowest 24h
            <span>
              {coin.market_data.high_24h?.toLocaleString("en-EN") ?? "N/A"}$
            </span>
          </div>
        </div>
        <DescriptionCard description={coin.description ?? "N/A"} />
        <p className="mt-10">Price Change Overview</p>
        <div className="flex flex-wrap gap-4 mt-2">
          {timeframes.map((t) => (
            <Card key={t.label} label={t.label} value={t.value} />
          ))}
        </div>
        <ViewdCoinTracker id={coinId} />
      </div>
    </main>
  );
}

function Card({ label, value }) {
  const isPositive = value >= 0;

  return (
    <div className="w-28 rounded-xl grid gap-2 p-3 bg-gradient-to-br from-white/10 to-white/5 text-sm">
      <span className="text-gray-400">{label}</span>
      {value ? (
        <div className="flex items-center gap-1 font-semibold">
          <Caret isPositive={isPositive} />
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {value.toFixed(2)}%
          </span>
        </div>
      ) : (
        "N/A"
      )}
    </div>
  );
}
