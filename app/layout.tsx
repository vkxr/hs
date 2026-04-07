import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "HS Techware | Computer Repair in Vadodara",
  description: "Laptop and computer repair landing page for HS Techware."
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${manrope.variable} bg-background font-[family-name:var(--font-manrope)] text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
