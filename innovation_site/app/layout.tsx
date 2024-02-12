import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

import SessionWrapper from "@/components/SessionWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovations Lab",
  description: "One stop shop for all your innovation needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-montserrat  antialiased"
        )}
      >
        <SessionWrapper>
          <Header />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
