import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ЭКОКОННТЕКТ 4.0 · волонтёрство и экология",
  description:
    "Информационный сайт о проекте ЭКОКОННТЕКТ 4.0: волонтёрство, экологичные практики и социально-значимая деятельность. Викторина, ценности, путь экочеловека и контакты команды.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
