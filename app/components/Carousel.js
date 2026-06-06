"use client";

import { useState, useEffect, useRef } from "react";

const slides = [
  { img: "/vehicle1.jpg", thumb: "/vehicle1.jpg" },
  { img: "/vehicle2.jpg", thumb: "/vehicle2.jpg" },
  { img: "/vehicle3.jpg", thumb: "/vehicle3.jpg" },
];

export default function Carousel() {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCur((c) => (c + 1) % slides.length), 4500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCur((c) => (c + 1) % slides.length), 4500);
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => { setCur((c) => (c - 1 + slides.length) % slides.length); resetTimer(); };
  const handleNext = () => { setCur((c) => (c + 1) % slides.length); resetTimer(); };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) { dx < 0 ? handleNext() : handlePrev(); }
    touchStartX.current = null;
  };

  const arrowStyle = {
    position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: 10,
    width: 46, height: 46, border: "1.5px solid rgba(255,255,255,.22)",
    background: "rgba(0,0,0,.55)", color: "#fff", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 24, outline: "none",
    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
  };

  return (
    <div style={{ background: "#0d0d0d", overflow: "hidden", userSelect: "none", fontFamily: "'Unbounded', sans-serif" }}>
      <div style={{ position: "relative", overflow: "hidden" }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div style={{ display: "flex", transform: `translateX(-${cur * 100}%)`, transition: "transform .45s cubic-bezier(.4,0,.2,1)", willChange: "transform" }}>
          {slides.map((s, i) => (
            <div key={i} style={{ flex: "0 0 100%", position: "relative" }}>
              <img
                src={s.img}
                alt={`Евакуатор фото ${i + 1}`}
                style={{ width: "100%", height: 420, objectFit: "cover", display: "block", filter: "brightness(.82)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.72) 0%, transparent 55%)", pointerEvents: "none" }} />
            </div>
          ))}
        </div>
        <button style={{ ...arrowStyle, left: 16 }} onClick={handlePrev} aria-label="Попередній">&#8249;</button>
        <button style={{ ...arrowStyle, right: 16 }} onClick={handleNext} aria-label="Наступний">&#8250;</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "14px 0", background: "#0d0d0d" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => { setCur(i); resetTimer(); }} aria-label={`Слайд ${i + 1}`}
            style={{ height: 3, width: cur === i ? 36 : 24, background: cur === i ? "#1E73E8" : "rgba(255,255,255,.2)", border: "none", cursor: "pointer", padding: 0, transition: "width .25s, background .25s" }}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: 3, background: "#0d0d0d", paddingBottom: 2 }}>
        {slides.map((s, i) => (
          <div key={i} onClick={() => { setCur(i); resetTimer(); }}
            style={{ flex: 1, height: 72, overflow: "hidden", cursor: "pointer", opacity: cur === i ? 1 : 0.4, borderTop: cur === i ? "2px solid #1E73E8" : "2px solid transparent", transition: "opacity .25s, border-color .25s" }}>
            <img src={s.thumb} alt={`мініатюра ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
