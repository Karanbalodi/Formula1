import type { Metadata } from "next";
import "./globals.css";
import { defaults } from "chart.js";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/google-analytics/google-analytics";

export const metadata: Metadata = {
  title: "F1 - race analytics application",
  description:
    "Provide detailed analysis about F1 race, lap summary player and lap speed analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  defaults.font.family = "f-bold";
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="px-8 2xl:px-48">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
