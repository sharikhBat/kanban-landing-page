import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "React Kanban Board with Drag & Drop | Simple & Lightweight",
  description: "A lightweight, drag-and-drop Kanban board built with React. Enhance your project management for just $30, forever.",
  keywords: "react kanban board, drag and drop, npm kanban package, react drag drop kanban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
