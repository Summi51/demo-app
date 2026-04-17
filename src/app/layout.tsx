import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HLS Global Group | Empowered Workplaces",
  description: "Comprehensive solutions to empower your team and foster an engaging, productive environment. HLS Global Group specializes in tax advisory, audit, and consulting.",
  keywords: ["HLS Global", "Tax Advisory", "Consulting", "Audit", "Outsourcing Solutions"],
  authors: [{ name: "HLS Global" }],
  openGraph: {
    title: "HLS Global Group | Empowered Workplaces",
    description: "Comprehensive solutions to empower your team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-[#4A4A4A] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
