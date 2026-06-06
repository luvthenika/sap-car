"use client";

import { useState } from "react";

const MAX_CLICKS = 2;
const STORAGE_KEY = "sap_car_call_count";

export function useCallLimit(phone) {
  const [clicks, setClicks] = useState(() => {
    if (typeof window === "undefined") return 0;
    return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
  });

  const handleCall = () => {
    if (clicks >= MAX_CLICKS) return;
    const next = clicks + 1;
    setClicks(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    window.location.href = `tel:${phone}`;
  };

  return {
    handleCall,
    isLimited: clicks >= MAX_CLICKS,
  };
}