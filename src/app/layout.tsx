import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const heading = Space_Grotesk({
  variable: "--font-nehomi",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-menutal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOUSE OF DESIGN — Senior Figma & Graphic Direction",
  description:
    "Crafting iconic Figma design systems, graphic brand identities, and high-performance mobile & web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="film-grain antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
