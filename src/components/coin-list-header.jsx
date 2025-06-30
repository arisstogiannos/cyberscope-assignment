export default function CoinListHeader() {
  return (
    <li className="grid grid-cols-3 sticky top-0 backdrop-blur-2xl md:grid-cols-7 gap-10 text-gray-400 border-b border-b-white/10  px-2 py-3  ">
      <span className="hidden md:block">#</span>
      <span>Name</span>
      <span className="hidden md:block">Symbol</span>
      <span>Price</span>
      <span className="hidden md:block">Highest (24h)</span>
      <span className="hidden md:block">Lowest (24h)</span>
      <span>Change (%)</span>
    </li>
  );
}
