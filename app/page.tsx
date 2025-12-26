import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-muted/30">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Master Your Music
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          The ultimate collection of chords, notes, and tabs for musicians.
          Simple, clean, and distraction-free.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search for songs, artists, or chords..."
            className="w-full px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring text-lg shadow-sm"
          />
          <button className="absolute right-2 top-2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Categories / Instruments */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Browse by Instrument
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Guitar", "Piano", "Ukulele", "Bass"].map((inst) => (
            <div
              key={inst}
              className="group cursor-pointer bg-card hover:bg-accent p-8 rounded-2xl transition text-center border border-border"
            >
              <h3 className="text-xl font-semibold group-hover:text-accent-foreground">{inst}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Songs */}
      <section className="py-16 px-4 max-w-7xl mx-auto border-t border-border">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold">Trending Now</h2>
          <Link href="/browse" className="text-muted-foreground hover:text-foreground font-medium">
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="border border-border bg-card rounded-xl p-6 hover:shadow-lg transition duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-muted text-muted-foreground text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                  Chords
                </div>
                <span className="text-muted-foreground text-sm">4.9 ★</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Song Title {i}</h3>
              <p className="text-muted-foreground mb-4">Artist Name</p>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span>Guitar</span>
                <span>•</span>
                <span>Intermediate</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Get the latest chords and updates delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg text-foreground bg-background focus:outline-none w-full"
          />
          <button className="bg-background text-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
