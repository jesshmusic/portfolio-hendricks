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
  description: "Work and projects by Jess Hendricks",
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
