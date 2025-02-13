import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"
import { NearWalletProvider } from "@/components/providers/NearWalletProvider";
import { ThemeProvider } from '@/context/ThemeContext'

import "@near-wallet-selector/modal-ui/styles.css"
import "./globals.css";
import LayoutCustom from "@/components/custom/LayoutCustom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "grants.fun",
  description: "grants.fun is an autonomous grant operator platform built on NEAR Protocol, designed to create and manage AI-powered grant distribution systems.",
  keywords: [
    "grants",
    "NEAR Protocol",
    "AI",
    "blockchain",
    "grant distribution",
    "autonomous agents",
    "web3",
    "cryptocurrency",
  ],
  authors: [{ name: "Potlock team" }],
  openGraph: {
    title: "grants.fun - AI-Powered Grant Distribution Platform",
    description: "grants.fun is an autonomous grant operator platform built on NEAR Protocol, designed to create and manage AI-powered grant distribution systems.",
    type: "website",
    locale: "en_US",
    siteName: "grants.fun",
  },
  twitter: {
    card: "summary_large_image",
    title: "grants.fun - AI-Powered Grant Distribution Platform",
    description: "grants.fun is an autonomous grant operator platform built on NEAR Protocol, designed to create and manage AI-powered grant distribution systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <ThemeProvider>
          <NearWalletProvider>
            <Toaster position="top-center" />
            <LayoutCustom> 
              {children} 
            </LayoutCustom>
          </NearWalletProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
