
const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];
 


export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-300/10 bg-navy-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
        <a
          href="#home"
          className="font-[family-name:var(--font-caveat)] text-2xl font-semibold text-navy-100 transition-colors hover:text-white"
        >
          Sadiya
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-3 py-1.5 text-sm text-navy-300 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-gradient-to-r from-navy-100 to-navy-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Sadiya_Tasnim_Resume_No_Photo.pdf"
          download="Sadiya-Resume.pdf"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-800 to-navy-400 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-navy-400/25 transition-all hover:shadow-navy-400/50 hover:brightness-110"
        >
          Resume
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-y-0.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </nav>

      {/* mobile menu anchor strip */}
      <div className="flex gap-4 overflow-x-auto border-t border-navy-300/10 px-5 py-2 text-xs text-navy-300 md:hidden">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="shrink-0 hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
