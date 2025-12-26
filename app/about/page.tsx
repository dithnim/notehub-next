import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-3xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-6">About NoteHub</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            NoteHub is designed for musicians who want a clean, distraction-free
            environment to manage their chords, lyrics, and musical ideas.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            We believe that creativity shouldn't be hindered by complex
            interfaces. Our goal is to provide a simple yet powerful tool that
            gets out of your way and lets you focus on the music.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Clean, minimal interface</li>
            <li>Dark and light mode support</li>
            <li>Organize by instrument or category</li>
            <li>Quick search for chords and songs</li>
          </ul>

          <div className="bg-muted p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-muted-foreground">
              Have questions or suggestions? Reach out to us at{" "}
              <a
                href="mailto:hello@notehub.com"
                className="text-primary hover:underline"
              >
                hello@notehub.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
