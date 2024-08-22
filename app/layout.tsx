import type { Metadata } from "next";
import "./globals.css";
import { defaults } from "chart.js";

export const metadata: Metadata = {
  title: "F1 - race analytics application",
  description: "Provide detailed analysis about F1 race, lap summary player and lap speed analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  defaults.font.family = "f-bold";
  return (
    <html lang="en">
      <body className="px-8">{children}</body>
    </html>
  );
}
