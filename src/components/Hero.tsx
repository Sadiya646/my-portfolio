import Image from "next/image";
import { profile } from "@/data/portfolio";

const socials = [
  {
    href: profile.github,
    label: "GitHub",
    path: "M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.07 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 7.02c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.54 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    path: "M6.94 8.5H3.27V20h3.67V8.5ZM5.1 3C3.94 3 3 3.94 3 5.1s.94 2.1 2.1 2.1 2.1-.94 2.1-2.1S6.26 3 5.1 3ZM20.73 13.42c0-3.46-1.84-5.07-4.29-5.07-1.98 0-2.87 1.09-3.37 1.86V8.5H9.4V20h3.67v-5.7c0-1.5.28-2.96 2.15-2.96 1.84 0 1.86 1.73 1.86 3.06V20h3.65v-6.58Z",
  },
  {
    href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sadiatasnim646@gmail.com",
    label: "Email",
    path: "M3 5h18v14H3V5Zm0 0 9 7 9-7",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#021024] pt-28 md:pt-32"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-navy-400/20 blur-[110px]" />

        {/* Center glow */}
        <div className="absolute left-[35%] top-[35%] h-80 w-80 rounded-full bg-navy-800/50 blur-[120px]" />

        {/* Bottom left glow */}
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-navy-400/15 blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#C1E8FF 1px, transparent 1px), linear-gradient(90deg, #C1E8FF 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        
        {/* ================= LEFT ================= */}
        <div className="z-10 max-w-2xl animate-fade-up">
          
          {/* Designation */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-400/50 bg-navy-800/50 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-navy-100 shadow-[0_0_12px_#C1E8FF]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-100 md:text-xs">
              {profile.designation}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.2rem]">
            Building modern web
            <br />
            experiences from
            <br />
            <span
              className="bg-linear-to-r from-[#C1E8FF] via-[#7DA0CA] to-[#5483B3] bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 35px rgba(193,232,255,0.15)",
              }}
            >
              frontend to backend.
            </span>
          </h1>

          {/* Intro */}
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#7DA0CA] md:text-base">
            {profile.intro}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            
            {/* View Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-100 px-6 py-3 text-sm font-semibold text-navy-950 shadow-[0_0_25px_rgba(193,232,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(193,232,255,0.35)]"
            >
              View Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Download Resume */}
            <a
              href="/Resume.png"
              download="Sadiya-Resume.png"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-400/70 bg-navy-800/30 px-6 py-3 text-sm font-medium text-navy-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-100 hover:bg-navy-800/60"
            >
              Download Resume

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#5483B3]/50 bg-navy-800/40 text-[#7DA0CA] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C1E8FF] hover:bg-[#5483B3]/30 hover:text-[#C1E8FF]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative mx-auto flex w-full max-w-[400px] items-center justify-center">

          {/* Animated background glow */}
          <div
            aria-hidden
            className="animate-glow absolute h-[300px] w-[300px] rounded-full bg-[#5483B3]/20 blur-[90px] md:h-[340px] md:w-[340px]"
          />

          {/* Rotating light */}
          <div
            aria-hidden
            className="absolute h-[270px] w-[270px] animate-[spin_12s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent,#5483B3,transparent,#C1E8FF,transparent)] opacity-40 blur-2xl md:h-[310px] md:w-[310px]"
          />

          {/* Soft inner glow */}
          <div
            aria-hidden
            className="absolute h-[230px] w-[230px] rounded-full bg-[#7DA0CA]/10 blur-3xl md:h-[270px] md:w-[270px]"
          />

          {/* Main image */}
          <div className="relative h-[260px] w-[220px] overflow-hidden rounded-[2.5rem] border border-[#7DA0CA]/40 bg-[#052659] shadow-[0_25px_70px_rgba(2,16,36,0.8)] transition-transform duration-500 hover:-translate-y-2 md:h-[310px] md:w-[260px]">
            
            <Image
              src="/images/profileimage.png"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 768px) 260px, 220px"
              className="object-cover"
            />

            {/* Image overlay */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#021024]/45 via-transparent to-[#5483B3]/15"
            />
          </div>

          {/* Floating code chip */}
          <div className="animate-float absolute -right-1 top-8 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7DA0CA]/40 bg-[#052659]/90 font-mono text-sm text-[#C1E8FF] shadow-[0_10px_30px_rgba(2,16,36,0.6)] backdrop-blur-md md:-right-3">
            &lt;/&gt;
          </div>

          {/* Small floating accent */}
          <div
            aria-hidden
            className="animate-float absolute -left-3 bottom-16 h-3 w-3 rounded-full bg-[#C1E8FF] shadow-[0_0_20px_#C1E8FF] md:-left-6"
            style={{ animationDelay: "1s" }}
          />

          {/* Decorative dots */}
          <div className="absolute -left-4 top-16 grid grid-cols-4 gap-2 opacity-60 md:-left-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="animate-shimmer h-1.5 w-1.5 rounded-full bg-[#7DA0CA]"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Bottom decorative dots */}
          <div className="absolute -bottom-4 -right-2 grid grid-cols-4 gap-2 opacity-50 md:-right-7">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="animate-shimmer h-1.5 w-1.5 rounded-full bg-[#5483B3]"
                style={{
                  animationDelay: `${i * 0.25}s`,
                }}
              />
            ))}
          </div>

          {/* Handwritten text */}
          <div className="absolute -right-8 bottom-4 rotate-[-10deg] text-right text-[#7DA0CA] md:-right-16 md:bottom-6">
            <p className="font-(family-name:--font-caveat) text-lg leading-5 md:text-xl md:leading-6">
              Better
              <br />
              Code
              <br />
              Brighter
              <br />
              Future
            </p>

            <span className="ml-4 text-xl">⌁</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#021024] to-transparent" />
    </section>
  );
}