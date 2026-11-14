import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUST. — The Science of Desire & Self-Mastery",
  description:
    "A premium interactive educational website exploring human desire, neurochemistry, brain reward circuits, behavioural reinforcement, and the science of self-mastery.",
  keywords: [
    "neuroscience",
    "dopamine",
    "desire",
    "self-mastery",
    "psychology",
    "prefrontal cortex",
    "self-regulation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#050705] text-[#F2F5EF]">{children}</body>
    </html>
  );
}
