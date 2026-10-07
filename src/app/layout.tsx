import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadiya Tasnim | Frontend Developer",
  description:
    "Portfolio of Sadiya, a Computer Science student and frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}