import type { Metadata } from "next";
import {Fira_Code, Plus_Jakarta_Sans as SansFont} from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const mainFont = SansFont({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Portfolio of Jess Hendricks",
  description:
    "Explore the portfolio, projects, and professional work of Jess Hendricks — a front-end engineer, designer, and creative technologist.",
  keywords: [
    "Jess Hendricks",
    "Front-end Developer",
    "React Engineer",
    "Web Portfolio",
    "UI/UX Designer",
    "Creative Developer",
    "TypeScript",
    "JavaScript",
    "Next.js Projects",
    "Modern Web Design"
  ],
  metadataBase: new URL("https://portfolio-hendricks.vercel.app"),
  openGraph: {
    title: "The Portfolio of Jess Hendricks",
    description:
      "Discover the work of Jess Hendricks, a developer and designer building modern web experiences.",
    url: "https://portfolio-hendricks.vercel.app",
    siteName: "Jess Hendricks Portfolio",
    images: [
      {
        url: "/logos/logo.png",
        width: 256,
        height: 256,
        alt: "Jess Hendricks Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-128x128.png",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`antialiased min-h-screen flex flex-col ${mainFont.variable} ${firaCode.variable}`}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </body>
    </html>
  );
}
