import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./sections/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flash Flood Risk Portal",
  description: "A website to calculate flash flood risk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}