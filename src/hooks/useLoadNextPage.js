import { getCoinsCached } from "@/app/server-actions/coins";
import { useEffect, useRef, useState } from "react";

export default function useLoadNextPage(initialCoins, currPage) {
  const [coins, setCoins] = useState(initialCoins);
  const [nextPage, setNextPage] = useState(currPage ? Number(currPage) + 1 : 2);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef(false);

  const loadNextPage = async () => {
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);

    const newCoins = await getCoinsCached(nextPage);
    setCoins((prev) => [...prev, ...newCoins]);
    setNextPage((prev) => prev + 1);
    setIsLoading(false);
    isLoadingRef.current = false;
    updateSearchParams(nextPage);
  };

  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;

      if (bottomReached && !isLoadingRef.current) {
        loadNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPage]);

  return { coins, isLoading };
}

function updateSearchParams(page) {
  if (window.location.pathname !== "/") return;
  const params = new URLSearchParams(window.location.search);
  params.set("page", page);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", newUrl);
}
