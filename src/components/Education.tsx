import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-band">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading index="03" kicker="Education" title="My Education" />

          <span className="mb-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-navy-300/25 bg-navy-800/40 px-4 py-2 text-sm text-navy-100 lg:mb-12">
            <span aria-hidden>🎓</span> {profile.education}
          </span>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="absolute -top-6 left-0 h-px w-full bg-navy-300/15">
            <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-navy-100 shadow-[0_0_12px_2px_rgba(193,232,255,0.5)]" />
          </div>

          <div className="grid gap-4 md:grid-cols-1">
            <div className="card-shell flex items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-400/30 to-navy-800 text-lg">
                🎓
              </div>
              <div>
                <p className="text-xs font-medium text-navy-400">
                  {new Date().getFullYear()} — Present
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  B.Sc. in Computer Science &amp; Engineering
                </h3>
                <p className="mt-1 text-sm text-navy-300">
                  Expected graduation: March 2028
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
