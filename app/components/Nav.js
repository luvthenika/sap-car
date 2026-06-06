"use client";

import { useState, useEffect } from "react";
import CallButton from "./CallButton";

const PHONE = "+38 075 663 52 44";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 5vw", height: 68, display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: 24,
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
      fontFamily: "'Unbounded', 'Helvetica Neue', sans-serif",
    }}>
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", color: "#fff" }}>SAP CAR</span>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", color: "#fff" }}>Евакуатор</span>
      </a>
      <CallButton phone={PHONE}>Виклик</CallButton>
    </nav>
  );
}
