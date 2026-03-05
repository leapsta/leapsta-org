// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEAPSTA, Inc.",
  description: "Law Enforcement & Public Safety Training Associates",
};

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/traffic-school", label: "Traffic School" },
  { href: "/responsible-vendor", label: "Responsible Vendor" },
  { href: "/high-school-programs", label: "High School Programs" },
  { href: "/law-enforcement", label: "Law Enforcement" },
  { href: "/contact", label: "Contact Us" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        {/* Top bar */}
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            {/* Brand (no black box) */}
            <a href="/" className="flex items-center gap-3">
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-wide">LEAPSTA, Inc.</div>
                <div className="text-xs text-slate-600">
                  Law Enforcement &amp; Public Safety Training Associates
                </div>
              </div>
            </a>

            {/* Nav */}
            <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 md:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-slate-900 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Mobile nav (simple) */}
            <details className="md:hidden">
              <summary className="cursor-pointer select-none rounded-lg border px-3 py-2 text-sm font-semibold">
                Menu
              </summary>
              <div className="mt-2 flex min-w-[220px] flex-col rounded-xl border bg-white p-2 shadow-sm">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} LEAPSTA, Inc.</div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a className="hover:text-slate-900" href="/contact">
                  Contact
                </a>
                <a className="hover:text-slate-900" href="/about">
                  About
                </a>
                <a className="hover:text-slate-900" href="/">
                  Home
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}