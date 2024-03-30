import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoPlus Web",
  description: "Web Frontend for NoPlus",
  authors: [{
    name: "Jack Ruder",
    url: "https://github.com/derjacklive",
  },
  {
    name: "Actualy no one Else",
    url: "https://www.youtube.com/watch?v=hvL1339luv0",
  },
  ],
  robots: "index, follow",
  keywords: "NoPlus, NoPlus-Web, Frontend, DerJackLive, DJL",
  applicationName: "NoPlus Web",
  generator: "Next.js",
  publisher: "DerJackLive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics/>
      <body className={`${inter.className} bg-bg`}>{children}</body>
    </html>
  );
}
