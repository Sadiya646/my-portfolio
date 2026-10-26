import type { Metadata } from "next";
import { Geist, Caveat } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Sadiya Tasnim | Aspiring Full Stack Developer",
  description:
    "Portfolio of Sadiya Tasnim — a Computer Science student building modern web experiences from frontend to backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${caveat.variable}`}>
      <body className="font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
