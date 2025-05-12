import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartik Tripathi - Python Developer & Cybersecurity Engineer",
  description: "Portfolio website showcasing Python development and cybersecurity expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <AnimatedBackground />
        <main className="relative min-h-screen text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
