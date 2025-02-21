import type { Metadata } from "next";
import { ReactNode } from "react";

// Tailwind CSS
import "@/styles/tailwind.css";

// Global CSS
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Where to go",
  description:
    "Where to Go is the ideal platform for those who want to stay on top of the best events! Here you'll find concerts, festivals, plays, fairs and much more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased text-zinc-800">{children}</body>
    </html>
  );
}
