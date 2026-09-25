import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twakshree — Shatdhauta Ghrita | Ayurvedic Skin Moisturiser",
  description:
    "Manjistha-siddha cow ghee washed a hundred times. Deeply soothes dry, irritated and sensitive skin. Cool, calming, daily face & body care.",
  openGraph: {
    title: "Twakshree — Shatdhauta Ghrita",
    description:
      "Manjistha-siddha cow ghee for dry, irritated, sensitive skin. Ayurvedic, cooling, daily face & body moisture.",
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
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
