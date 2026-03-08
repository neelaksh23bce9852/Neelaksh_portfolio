import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manda Neelaksh | AI Developer & Builder",
  description:
    "Portfolio of Manda Neelaksh — AI enthusiast, Generative AI learner, and builder of intelligent systems solving real-world problems.",
  keywords: [
    "AI Developer",
    "Machine Learning",
    "Generative AI",
    "Portfolio",
    "Manda Neelaksh",
  ],
  openGraph: {
    title: "Manda Neelaksh | AI Developer & Builder",
    description:
      "AI enthusiast building practical solutions that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-surface-0 text-text-primary noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
