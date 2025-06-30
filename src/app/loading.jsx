import CoinListHeader from "@/components/coin-list-header";

export default function Loading({ count = 20 }) {
  return (
    <ul className="flex flex-col gap-3 mt-0 py-10">
      <h1 className="mx-auto text-4xl font-semibold mb-14">Crypto App</h1>
      <CoinListHeader />

      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="grid grid-cols-3 md:grid-cols-7 gap-10 p-4 animate-pulse rounded-xl bg-white/5"
        >
          <div className="h-5 bg-gray-500/30 rounded w-8 hidden md:block" />
          <div className="h-5 bg-gray-500/30 rounded w-24" />
          <div className="h-5 bg-gray-500/30 rounded w-20 hidden md:block" />
          <div className="h-5 bg-gray-500/30 rounded w-20 hidden md:block" />
          <div className="h-5 bg-gray-500/30 rounded w-20 hidden md:block" />
          <div className="h-5 bg-gray-500/30 rounded w-16" />
          <div className="h-5 bg-gray-500/30 rounded w-14" />
        </li>
      ))}
    </ul>
  );
}
