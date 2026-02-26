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
  title: "Clémentine portfolio",
  description: "Game designer portfolio showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={` ${jura.variable} antialiased`}>
        <ScrollToTopButton />
        <Toaster position="top-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
