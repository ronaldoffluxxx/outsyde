import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventify - Discover & Buy Tickets",
  description: "The best place to find and buy tickets for your favorite events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full bg-spotify-black min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col ml-[250px]">
            <Header />
            <main className="flex-1 overflow-y-auto bg-spotify-black p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
