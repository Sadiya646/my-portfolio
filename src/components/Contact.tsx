export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d0f12] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-16">
          
          <p className="text-sm uppercase tracking-[0.3em] text-[#ccff00]">
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Let's build something
            <span className="text-[#ccff00]"> great.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-500">
            Have a project idea or want to work together? Feel free to reach
            out. I'm always open to new opportunities.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-9 inline-block rounded-full bg-[#ccff00] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Say Hello →
          </a>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-gray-500 transition hover:text-[#ccff00]"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-gray-500 transition hover:text-[#ccff00]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="text-gray-500 transition hover:text-[#ccff00]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}