import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raul Catalan",
  description: "Raul Catalans Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} h-auto min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-400`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
