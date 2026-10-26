
"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { skills, skillCategories } from "@/data/portfolio";

export default function Skills() {
  const [active, setActive] = useState<string>("all");

  const visible =
    active === "all"
      ? skills
      : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="section-band relative overflow-hidden"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Top-left blue glow */}
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#5483B3]/15 blur-[130px]"
      />

      {/* Top-right blue glow */}
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#052659]/40 blur-[120px]"
      />

      {/* Bottom-right floating glow */}
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#7DA0CA]/15 blur-[130px]"
      />

      {/* Floating circle */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-16 top-1/2 h-44 w-44 rounded-full border border-[#5483B3]/20 bg-[#5483B3]/5"
        style={{ animationDelay: "1s" }}
      />

      {/* Small dot pattern - left */}
      <div
        aria-hidden
        className="absolute left-[5%] top-[35%] grid grid-cols-4 gap-2 opacity-40"
      >
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

      {/* Small dot pattern - right */}
      <div
        aria-hidden
        className="absolute bottom-20 right-[7%] grid grid-cols-4 gap-2 opacity-30"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="animate-shimmer h-1.5 w-1.5 rounded-full bg-[#C1E8FF]"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:py-24">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            index="02"
            kicker="Skills"
            title="My Skills"
          />

          {/* Filter Buttons */}
          <div className="flex w-full justify-start md:justify-end">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-navy-300/20 bg-navy-950/30 p-2 backdrop-blur-md">
              {skillCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`
                    rounded-full px-5 py-2.5
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      active === c.id
                        ? "bg-gradient-to-r from-navy-400 to-navy-800 text-white shadow-lg shadow-navy-400/30 ring-1 ring-navy-100/40"
                        : "text-navy-300 hover:bg-navy-800/50 hover:text-navy-100"
                    }
                  `}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {visible.map((skill) => (
              <div
                key={`${active}-${skill.name}`}
                className="animate-pop card-shell group flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-navy-100/40 hover:bg-navy-800/40 hover:shadow-lg hover:shadow-[#5483B3]/10"
              >
                {/* Skill Icon */}
                <span
                  className={`
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl text-sm font-bold
                    ${skill.markColor}
                  `}
                >
                  {skill.mark}
                </span>

                {/* Skill Name */}
                <span className="text-sm font-medium text-navy-100">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}