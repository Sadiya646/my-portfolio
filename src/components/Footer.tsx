export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090a0d] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-600 md:flex-row">
        <p>
          © {new Date().getFullYear()} Sadiya Tasnim. All rights reserved.
        </p>

        <p>
          Built with Next.js & TypeScript.
        </p>
      </div>
    </footer>
  );
}