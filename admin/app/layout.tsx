import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import { cn } from "@/lib/utils";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

const inter = Inter({ subsets: ["latin"] });

//Mine
import { Toaster } from "@/components/ui/toaster";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";

export const metadata: Metadata = {
  title: "Innovation Lab :- Admin",
  description: "Admin Site of Innovation Lab",
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
          inter.className,
          "min-h-screen bg-background font-sans dark antialiased"
        )}
      >
        <SessionWrapper>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children}
          <Toaster />
        </SessionWrapper>
      </body>
    </html>
  );
}
