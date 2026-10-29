export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* ================= GRID ================= */}

      <div className="premium-grid" />


      {/* ================= SCAN LINES ================= */}

      <div className="scan-line scan-one" />
      <div className="scan-line scan-two" />
      <div className="scan-line scan-three" />


      {/* ================= PARTICLES ================= */}

      <span
        className="particle"
        style={{ left: "8%", top: "18%" }}
      />

      <span
        className="particle"
        style={{
          left: "18%",
          top: "72%",
          animationDelay: "1s",
        }}
      />

      <span
        className="particle"
        style={{
          left: "32%",
          top: "35%",
          animationDelay: "2s",
        }}
      />

      <span
        className="particle"
        style={{
          left: "48%",
          top: "82%",
          animationDelay: "0.5s",
        }}
      />

      <span
        className="particle"
        style={{
          left: "63%",
          top: "20%",
          animationDelay: "3s",
        }}
      />

      <span
        className="particle"
        style={{
          left: "76%",
          top: "62%",
          animationDelay: "1.5s",
        }}
      />

      <span
        className="particle"
        style={{
          left: "88%",
          top: "30%",
          animationDelay: "2.5s",
        }}
      />

      <span
        className="particle"
        style={{
          left: "92%",
          top: "84%",
          animationDelay: "4s",
        }}
      />


      {/* ================= SUBTLE EDGE ================= */}

      <div className="premium-edge" />

    </div>
  );
}