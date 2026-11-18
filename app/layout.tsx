import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LXB Group | Professional Solutions. Built Around Your Ambition.",
    template: "%s | LXB Group",
  },
  description:
    "LXB Group brings together expertise in quantity surveying, architecture, 3D visualization, web development and digital automation to deliver professional solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
