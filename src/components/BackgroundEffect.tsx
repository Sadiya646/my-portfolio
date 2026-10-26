export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Top Right Glow */}
      <div className="animate-drift absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#5483B3]/20 blur-[120px]" />

      {/* Left Glow */}
      <div className="animate-glow absolute -left-40 top-[35%] h-[400px] w-[400px] rounded-full bg-[#052659]/40 blur-[120px]" />

      {/* Bottom Right Glow */}
      <div className="animate-drift-slow absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#7DA0CA]/10 blur-[120px]" />

      {/* Small floating circles */}
      <div className="animate-float absolute left-[5%] top-[25%] h-24 w-24 rounded-full bg-[#5483B3]/10 blur-xl" />

      <div className="animate-float absolute right-[8%] top-[55%] h-32 w-32 rounded-full bg-[#C1E8FF]/10 blur-2xl" />

      {/* Dot pattern */}
      <div className="absolute left-[8%] top-[45%] grid grid-cols-4 gap-2 opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="animate-shimmer h-1.5 w-1.5 rounded-full bg-[#7DA0CA]"
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
}