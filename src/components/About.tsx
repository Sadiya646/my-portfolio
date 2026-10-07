export default function About() {
  return (
    <section id="about" className="bg-[#0d0f12] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ccff00]">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            A little bit about me.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          <div>
            <p className="text-lg leading-8 text-gray-400">
              I'm a Computer Science and Engineering student who enjoys
              creating modern and interactive web experiences.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              My main focus is frontend development. I enjoy turning ideas
              into clean, responsive and user-friendly interfaces.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Currently, I'm improving my skills in React, Next.js,
              TypeScript, authentication and modern web development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <p className="text-4xl font-bold text-[#ccff00]">10+</p>
              <p className="mt-2 text-gray-500">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <p className="text-4xl font-bold text-[#ccff00]">5+</p>
              <p className="mt-2 text-gray-500">Technologies</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <p className="text-4xl font-bold text-[#ccff00]">CSE</p>
              <p className="mt-2 text-gray-500">Student</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <p className="text-4xl font-bold text-[#ccff00]">∞</p>
              <p className="mt-2 text-gray-500">Learning</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}