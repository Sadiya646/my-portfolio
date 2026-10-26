const socials = [
  {
    href: "https://github.com/Sadiya646",
    label: "GitHub",
    d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.47v-1.65c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68.11-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.21 2.4.1 2.65.63.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.58.67.46A10 10 0 0 0 22 12 10 10 0 0 0 12 2z",
  },
  {
    href: "https://www.linkedin.com/in/sadiya-tasnim/",
    label: "LinkedIn",
    d: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z",
  },
{
  href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sadiatasnim646@gmail.com",
  label: "Email",
  d: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
},
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-300/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        
        <a
          href="#home"
          className="font-(family-name:--font-caveat) text-2xl font-semibold text-navy-100"
        >
          Sadiya
        </a>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
       <a
  key={s.label}
  href={s.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={s.label}
  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-300/25 text-navy-300 transition-all duration-300 hover:-translate-y-1 hover:border-navy-100/60 hover:bg-navy-800/40 hover:text-navy-100"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d={s.d} />
  </svg>
</a>
          ))}
        </div>

        <p className="text-xs text-navy-400">
          © {new Date().getFullYear()} Sadiya Tasnim. All rights reserved.
        </p>

      </div>
    </footer>
  );
}