"use client";

import { useEffect } from "react";

export default function ViewdCoinTracker({ id }) {
  useEffect(() => {
    localStorage.setItem("backFrom", id);
  }, [id]);

  return null;
}
