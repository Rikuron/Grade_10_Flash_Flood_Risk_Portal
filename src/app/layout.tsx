import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 z-20">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Flash Flood Risk Portal</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}