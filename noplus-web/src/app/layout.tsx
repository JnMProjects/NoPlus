import type { Metadata } from "next";
import { Oxanium, Bungee_Spice } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

const bungeeSpice = Bungee_Spice({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee-spice",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://noplus.vercel.app'),
  title: "NoPlus Web-App",
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
  generator: "Next.js",
  keywords: "NoPlus, NoPlus-Web, Frontend, DerJackLive, DJL",
  referrer: "origin-when-cross-origin",
  creator: "Jack Ruder",
  publisher: "DerJackLive, Vercel, Steam",
  robots: "index, follow",
  icons: "brand/main/icon-512x512.png",
  applicationName: "NoPlus Web",
  manifest: "manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noplus.vercel.app/",
    siteName: "NoPlus Web",
    title: "NoPlus Web",
    description: "Web Frontend for NoPlus",
    images: [
      {
        url: "/brand/main/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "NoPlus Web Logo",
      },
      {
        url: "/brand/main/icon-192x192.png",
        width: 192,
        height: 192,
        alt: "NoPlus Web Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@derjacklive",
    creator: "@derjacklive",
    title: "NoPlus Web-App",
    description: "Web Frontend for NoPlus",
    images: "/brand/main/icon-512x512.png",
  },
  appleWebApp: {
    capable: true,
    title: "NoPlus Web-App",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract: "Web Frontend for NoPlus. By DerJackLive. NoPlus is a Project by DJL made to Learn and Explore the World of Unity and The Web",
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'de': '/de-DE'
    }
  }
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
      <body className={`${oxanium.variable} ${bungeeSpice.variable} font-oxanium bg-bg`}>
        {children}
      </body>
    </html>
  );
}
