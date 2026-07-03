import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "For Literature",
  description: "A resource hub for English literary studies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-100text-ink-800">
        <Navbar />
        <main>{children}</main>
        <footer className="bg-ink-900 text-cream-200 mt-20 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="font-serif text-2xl mb-3">For Literature</p>
            <p className="text-sm opacity-80">Built for the study of literature.</p>
            <p className="text-xs opacity-50 mt-6">© {new Date().getFullYear()} For Literature</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
