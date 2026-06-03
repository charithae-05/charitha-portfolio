import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} — ${profile.role} based in ${profile.location}. Building responsive, SEO-optimized web experiences with React and Next.js.`,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: `${profile.role} based in ${profile.location}, building responsive, performant web experiences with React and Next.js.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans leading-relaxed">{children}</body>
    </html>
  );
}
