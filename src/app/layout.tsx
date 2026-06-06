import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Relody — Every person in your life has a song",
  description:
    "Relody is the relationship journal that keeps your connections alive through music. Give the people you love their own melody.",
  keywords: ["music", "relationships", "memories", "songs", "connection"],
  openGraph: {
    title: "Relody — Every person in your life has a song",
    description:
      "Relody is the relationship journal that keeps your connections alive through music.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
