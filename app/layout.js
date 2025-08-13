import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Morning Peace",
  description: "Morning Peace Financial Services",
  metadataBase: new URL('https://www.morningpeace.org/'),
  icons: {
    icon: "/morning-peace-logo.png",
    shortcut: "/morning-peace-logo.png",
    apple: "/morning-peace-logo.png",
  },
  openGraph: {
    title: "Morning Peace",
    description: "Morning Peace Financial Services",
    images: ["/morning-peace-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morning Peace",
    description: "Morning Peace Financial Services",
    images: ["/morning-peace-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Morning Peace</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
