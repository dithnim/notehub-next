import React from "react";

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Notes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Note Cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">Song Idea #{i}</h2>
              <p className="text-muted-foreground mb-4">
                C - G - Am - F progression. Needs a bridge.
              </p>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Last edited 2 days ago</span>
                <button className="text-primary hover:underline">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
