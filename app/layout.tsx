import type { Metadata } from "next";
import { Rochester } from "next/font/google";
import "./globals.css";

const rochester = Rochester({
  display: "swap",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-rochester",
});

export const metadata: Metadata = {
  title: "Dan Thompson's Portfolio",
  description: "Dan Thompson's personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Add your other meta tags and links to CSS/JS here */}</head>
      <body className={rochester.className}>{children}</body>
    </html>
  );
}
