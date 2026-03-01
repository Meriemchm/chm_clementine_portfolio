import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ScrollToTopButton from "@/components/ui/scroll-to-to-bottom";

//Google Fonts
const jura = Jura({
  weight: ["400", "500", "600", "700"],
  variable: "--font-jura",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Clémentine Portfolio",
    template: "%s | Clémentine Portfolio",
  },
  description:
    "Game designer portfolio showcasing projects, UX and game design skills.",
  keywords: ["game design", "portfolio", "game designer", "ux", "level design"],
  authors: [{ name: "Clémentine" }],
  openGraph: {
    title: "Clémentine Portfolio",
    description: "Game designer portfolio showcasing my work",
    url: "https://ton-site.com",
    siteName: "Clémentine Portfolio",
    images: ["/Ellipse.svg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clémentine Portfolio",
    description: "Game designer portfolio",
    images: ["/Ellipse.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${jura.variable} antialiased`}>
        <ScrollToTopButton />
        <Toaster position="top-right" />
        <header>
          <Navbar />
        </header>
        <main> {children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
