
"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send message. Please try again."
        );
      }

      setIsSuccess(true);
      setStatus("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setIsSuccess(false);

      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-band">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            index="06"
            kicker="Contact"
            title="Let's Work Together"
          />

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="card-shell flex items-center gap-4 p-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-400/20 text-navy-100">
                ✉
              </span>

              <span>
                <span className="block text-xs text-navy-400">
                  Email
                </span>

                <span className="block break-all text-sm text-navy-100">
                  {profile.email}
                </span>
              </span>
            </a>

            <div className="card-shell flex items-center gap-4 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-400/20 text-navy-100">
                🎓
              </span>

              <span>
                <span className="block text-xs text-navy-400">
                  Education
                </span>

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
                <span className="block text-xs text-navy-400">
                  Location
                </span>

                <span className="block text-sm text-navy-100">
                  Bangladesh
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <form
            onSubmit={handleSubmit}
            className="card-shell space-y-4 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs text-navy-300">
                  Name *
                </span>

                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  maxLength={100}
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
                  name="email"
                  autoComplete="email"
                  maxLength={254}
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
                name="message"
                rows={6}
                maxLength={5000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-navy-300/25 bg-navy-950/60 px-3 py-2.5 text-sm text-navy-100 placeholder-navy-400 outline-none transition-colors focus:border-navy-100/60"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-navy-300 to-navy-400 py-3 text-sm font-semibold text-navy-950 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-navy-300/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>

          <p className="hidden max-w-[10rem] rotate-3 self-center font-[family-name:var(--font-caveat)] text-2xl leading-snug text-navy-300 lg:block">
            Have a project in mind? Let's make it happen.
          </p>
        </div>
      </div>
    </section>
  );
}
