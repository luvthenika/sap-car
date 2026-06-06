"use client";

import { useCallLimit } from "../hooks/useCallLimit";

const btnStyle = {
  display: "inline-block", background: "#1E73E8", color: "#fff",
  fontSize: 13, fontWeight: 700, letterSpacing: "0.2em",
  textTransform: "uppercase", padding: "12px 24px", border: "none",
  cursor: "pointer", transition: "background 0.2s ease, transform 0.15s ease",
  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
  fontFamily: "'Unbounded', sans-serif",
};

const limitedStyle = {
  fontSize: 12, color: "#555", fontFamily: "sans-serif",
  padding: "12px 20px", border: "1px solid #222", maxWidth: 280, lineHeight: 1.5,
};

export default function CallButton({ phone, style = {}, children }) {
  const { handleCall, isLimited } = useCallLimit(phone);

  if (isLimited) {
    return <span style={limitedStyle}>Дякуємо! Зв'яжіться з нами пізніше.</span>;
  }

  return (
    <button onClick={handleCall} style={{ ...btnStyle, ...style }}>
      {children || phone}
    </button>
  );
}
