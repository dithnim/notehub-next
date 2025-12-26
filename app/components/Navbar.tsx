"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">NoteHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/notes"
              className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Notes
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
