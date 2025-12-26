"use client";

import { ThemeProvider } from "@/app/context/ThemeContext";
import Navbar from "@/app/components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </ThemeProvider>
  );
}
