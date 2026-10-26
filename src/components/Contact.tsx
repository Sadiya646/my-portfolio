"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend: compose a mailto link with the visitor's email client
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-band">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading index="06" kicker="Contact" title="Let's Work Together" />

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="card-shell flex items-center gap-4 p-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-400/20 text-navy-100">
                ✉
              </span>
              <span>
                <span className="block text-xs text-navy-400">Email</span>
                <span className="block text-sm text-navy-100">
                  {profile.email}
                </span>
              </span>
            </a>
            <div className="card-shell flex items-center gap-4 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-400/20 text-navy-100">
                🎓
              </span>
              <span>
                <span className="block text-xs text-navy-400">Education</span>
                <span className="block text-sm text-navy-100">
                  {profile.education}
                </span>
              </span>
            </div>
            <div className="card-shell flex items-center gap-4 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-400/20 text-navy-100">
                📍
              </span>
              <span>
                <span className="block text-xs text-navy-400">Location</span>
                <span className="block text-sm text-navy-100">
                  Bangladesh
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <form onSubmit={handleSubmit} className="card-shell space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs text-navy-300">
                  Name *
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-navy-300/25 bg-navy-950/60 px-3 py-2.5 text-sm text-navy-100 placeholder-navy-400 outline-none transition-colors focus:border-navy-100/60"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs text-navy-300">
                  Email *
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-navy-300/25 bg-navy-950/60 px-3 py-2.5 text-sm text-navy-100 placeholder-navy-400 outline-none transition-colors focus:border-navy-100/60"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs text-navy-300">
                Message *
              </span>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-navy-300/25 bg-navy-950/60 px-3 py-2.5 text-sm text-navy-100 placeholder-navy-400 outline-none transition-colors focus:border-navy-100/60"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-navy-300 to-navy-400 py-3 text-sm font-semibold text-navy-950 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-navy-300/30"
            >
              Send Message →
            </button>
          </form>

          <p className="hidden max-w-[10rem] rotate-3 self-center font-[family-name:var(--font-caveat)] text-2xl leading-snug text-navy-300 lg:block">
            Have a project in mind? Let&apos;s make it happen.
          </p>
        </div>
      </div>
    </section>
  );
}
