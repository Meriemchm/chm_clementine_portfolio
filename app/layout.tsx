import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

//Google Fonts
const jura = Jura({
  weight: ["400", "500", "600", "700"], 
  variable: "--font-jura",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "CB",
  description: "Your gateway to digital excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={` ${jura.variable} antialiased`}
      >
        <Toaster position="top-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
