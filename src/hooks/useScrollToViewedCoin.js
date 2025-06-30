import { useEffect } from "react";

export default function useScrollToViewedCoin() {
  useEffect(() => {
    const coinId = localStorage.getItem("backFrom");

    if (coinId) {
      const element = document.getElementById(coinId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      localStorage.removeItem("backFrom");
    }
  }, []);

  return null;
}
