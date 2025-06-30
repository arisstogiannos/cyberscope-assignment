"use client";
import useLoadNextPage from "@/hooks/useLoadNextPage";
import useScrollToViewedCoin from "@/hooks/useScrollToViewedCoin";
import Link from "next/link";
import Caret from "./icons/caret";
import CoinListHeader from "./coin-list-header";

export default function CoinList({ initialCoins, currPage }) {
  const { isLoading, coins } = useLoadNextPage(initialCoins, currPage);

  useScrollToViewedCoin();

  return (
    <ul className="flex flex-col gap-3 ">
      <CoinListHeader />
      {coins.length > 0 ? (
        coins.map((coin, i) => <CoinCard key={i} coin={coin} index={i} />)
      ) : (
        <div className=" mx-auto mt-5">No Coins Found</div>
      )}
      {isLoading ? (
        <li className=" flex justify-center w-full mt-4">
          <span className="border-t-2 rounded-full animate-spin  size-10 border-blue-400"></span>
        </li>
      ) : (
        <li className=" flex justify-center w-full h-10  mt-4"></li>
      )}
    </ul>
  );
}

function CoinCard({ coin, index }) {
  return (
    <li
      id={coin.id}
      className=" odd:bg-[#ffffff10] even:bg-[#ffffff05] rounded-xl transition-colors  hover:bg-blue-500/20"
    >
      <Link
        href={"/coins/" + coin.id}
        className="grid grid-cols-3 md:grid-cols-7 gap-10  size-full p-4 "
      >
        <span className="truncate hidden md:block">{index}</span>
        <span className="truncate">{coin.name}</span>
        <span className="truncate hidden md:block">{coin.symbol}</span>
        <span className="truncate hidden md:block">
          {coin.current_price?.toLocaleString("en-EN") ?? "N/A"}$
        </span>
        <span className="truncate hidden md:block">
          {coin.high_24h?.toLocaleString("en-EN") ?? "N/A"}$
        </span>
        <span className="truncate">
          {coin.low_24h?.toLocaleString("en-EN") ?? "N/A"}$
        </span>
        <div
          className={
            "flex items-center gap-2 " +
            (coin.price_change_percentage_24h < 0
              ? "text-red-800"
              : "text-green-700")
          }
        >
          <Caret isPositive={coin.price_change_percentage_24h >= 0} />
          <span>{coin.price_change_percentage_24h?.toFixed(3) ?? "N/A"}%</span>
        </div>
      </Link>
    </li>
  );
}
