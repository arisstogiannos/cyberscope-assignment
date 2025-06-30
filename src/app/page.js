import CoinList from "@/components/coins-list";
import { getCoinsCached } from "./server-actions/coins";

export default async function Home({ searchParams }) {
  const currPage = (await searchParams).page ?? "1";
  const coins = await getCoinsCached(1, parseInt(currPage) * 20);

  return (
    <main className="py-10 flex flex-col">
      <h1 className="mx-auto text-4xl font-semibold mb-14">Crypto App</h1>

      <CoinList initialCoins={coins} currPage={currPage} />
    </main>
  );
}
