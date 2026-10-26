<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# my-portfolio

## Commands

- `npm run dev` / `npm run build` / `npm run lint` (lint is plain `eslint` — no test script exists)
- Next 16 + Turbopack: Tailwind v4 is wired through `next.config.ts`'s `turbopack.rules` with `@tailwindcss/turbopack`, not PostCSS. Don't add `postcss.config`.
- React Compiler is enabled (`reactCompiler: true`) — don't add manual `useMemo`/`useCallback` unless profiling shows a need.

## Structure

- Single-route app: `src/app/page.tsx` composes section components from `src/components/` in order (Navbar → Hero → About → Skills → Projects → Experience → Contact → Footer).
- Portfolio content lives in `src/data/projects.ts` — edit data there, not in components.
- Default everything to Server Components; the only `"use client"` file is `Navbar.tsx` (interactive menu). Keep it that way.
- Path alias `@/*` → `src/*`.
