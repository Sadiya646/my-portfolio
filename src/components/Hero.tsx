export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#090a0d]"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ccff00]/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2 lg:px-8">
        
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#ccff00]">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-[#ccff00]">Sadiya</span>
            <span className="text-white">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I build modern, responsive and user-friendly web applications
            using React, Next.js, TypeScript and modern frontend technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#ccff00] px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/Sadiya646"
              target="_blank"
              className="text-sm text-gray-500 transition hover:text-[#ccff00]"
            >
              GitHub ↗
            </a>

            <a
              href="www.linkedin.com/in/sadiya-tasnim

"
              target="_blank"
              className="text-sm text-gray-500 transition hover:text-[#ccff00]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[#ccff00]/20" />

            <div className="absolute inset-5 rounded-full border border-white/10" />

            {/* Center */}
            <div className="absolute inset-12 flex items-center justify-center rounded-full bg-white/3 backdrop-blur-xl">
              <div className="text-center">
                <p className="text-6xl font-bold text-[#ccff00]">S</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                  Developer
                </p>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute right-4 top-10 h-3 w-3 rounded-full bg-[#ccff00]" />
            <div className="absolute bottom-10 left-3 h-2 w-2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}