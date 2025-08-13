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
    icon: [
      { url: "/morning-peace-logo.png?v=2", type: "image/png", sizes: "any" },
    ],
    shortcut: [
      { url: "/morning-peace-logo.png?v=2", type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/morning-peace-logo.png?v=2", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Morning Peace",
    description: "Morning Peace Financial Services",
    images: [
      "/src/img/morning_peace_no_BG.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morning Peace",
    description: "Morning Peace Financial Services",
    images: [
      "/src/img/morning_peace_no_BG.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico?v=2" />
				<link rel="icon" href="/morning-peace-logo.png?v=2" type="image/png" />
				<link rel="shortcut icon" href="/morning-peace-logo.png?v=2" type="image/png" />
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
