import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import CallButton from "./components/CallButton";

const PHONE = "+38 075 663 52 44";

const reasons = [
  { num: "24/7", label: "Без вихідних та свят" },
  { num: "30 хв", label: "Середній час прибуття" },
  { num: "100%", label: "Безпека вашого авто" },
];

const steps = [
  { n: "01", title: "Телефонуйте", desc: "Оператор відповідає протягом 30 секунд" },
  { n: "02", title: "Надішліть локацію", desc: "GPS або адреса — як вам зручно" },
  { n: "03", title: "Евакуатор їде", desc: "Точний час прибуття повідомляємо одразу" },
  { n: "04", title: "Авто на місці", desc: "Доставка до СТО, стоянки або додому" },
];

export default function Home() {
  return (
    <div id="top" style={{ background: "#0a0a0a", color: "#f0f0f0", overflowX: "hidden", fontFamily: "'Unbounded', 'Helvetica Neue', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        body { margin: 0; background: #0a0a0a; }
        ::selection { background: #1E73E8; color: #fff; }

        .btn-outline {
          display: inline-block; background: transparent; color: #1E73E8;
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; padding: 14px 32px;
          border: 1.5px solid #1E73E8; cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          font-family: 'Unbounded', sans-serif;
        }
        .btn-outline:hover { background: #1E73E8; color: #fff; }

        .ticker-anim {
          display: flex; gap: 48px;
          animation: ticker 20s linear infinite;
          white-space: nowrap;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .stat-block { padding: 40px 24px; border-top: 2px solid #1E73E8; }
        .step-card {
          border-left: 2px solid #1E73E8; padding: 24px 28px;
          background: #0f0f0f; transition: background 0.3s ease;
        }
        .step-card:hover { background: #141414; }

        .fixed-cta {
          position: fixed; bottom: 32px; right: 32px; z-index: 200;
          width: 64px; height: 64px; background: #1E73E8;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
          box-shadow: 0 0 30px rgba(30,115,232,0.4);
          transition: transform 0.2s ease; cursor: pointer; border: none;
        }
        .fixed-cta:hover { transform: scale(1.1); }

        @media (max-width: 768px) {
          .stats-grid-inner { grid-template-columns: 1fr 1fr !important; }
          .steps-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Nav />

      <section style={{ minHeight: "75vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 5vw 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "radial-gradient(ellipse at 80% 40%, rgba(231,76,60,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 40, height: 1, background: "#1E73E8" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "#1E73E8", textTransform: "uppercase", fontWeight: 600 }}>
              Евакуатор · Івано-Франківськ та область
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(48px, 9vw, 110px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff", marginBottom: 32 }}>
            ВИКЛИЧ<br />
            ЕВАКУАТОР<br />
            ЗАРАЗ
          </h1>
          <p style={{ fontSize: 15, color: "#888", fontWeight: 300, fontFamily: "sans-serif", maxWidth: 460, lineHeight: 1.7, marginBottom: 48 }}>
            Для легкових авто та мікроавтобусів до 5 тон
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <CallButton phone={PHONE}>{PHONE}</CallButton>
            <a href="#how" className="btn-outline">ІНФОРМАЦІЯ →</a>
          </div>
        </div>
      </section>

      <div style={{ background: "#1E73E8", padding: "14px 0", overflow: "hidden" }}>
        <div className="ticker-anim">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#fff", display: "flex", gap: 48, flexShrink: 0 }}>
              ЕВАКУАТОР 24/7&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;ШВИДКА ПОДАЧА&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;БЕЗПЕЧНЕ ПЕРЕВЕЗЕННЯ&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;ТЕХНІЧНА ДОПОМОГА&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section style={{ padding: "100px 5vw", background: "#0a0a0a" }}>
        <div className="stats-grid-inner" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {reasons.map((r) => (
            <div key={r.num} className="stat-block">
              <div style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 10 }}>{r.num}</div>
              <div style={{ fontSize: 12, color: "#666", letterSpacing: "0.1em", fontFamily: "sans-serif" }}>{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Carousel />

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1E73E8, transparent)", margin: "0 5vw" }} />

      <section id="how" style={{ padding: "100px 5vw", background: "#080808" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "#1E73E8", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Процес</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 40 }}>ЯК ЦЕ ПРАЦЮЄ</h2>
        </div>
        <div className="steps-grid-inner" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
          {steps.map((s) => (
            <div key={s.n} className="step-card">
              <div style={{ fontSize: 11, color: "#1E73E8", fontWeight: 700, letterSpacing: "0.2em", marginBottom: 20 }}>{s.n}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "0.03em" }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "#555", fontFamily: "sans-serif", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>


      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1E73E8, transparent)" }} />

      <footer style={{ padding: "32px 5vw", borderTop: "1px solid #111", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, background: "#1E73E8", transform: "rotate(45deg)" }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
            ЕВАК<span style={{ color: "#1E73E8" }}>24</span>
          </span>
        </div>
        <div style={{ fontSize: 11, color: "#333", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>© 2025 SAP CAR. Івано-Франківськ та область.</div>
        <a href={`tel:${PHONE}`} style={{ fontSize: 13, fontWeight: 700, color: "#1E73E8" }}>{PHONE}</a>
      </footer>
    </div>
  );
}