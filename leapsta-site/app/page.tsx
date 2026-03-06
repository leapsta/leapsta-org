// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "LEAPSTA, Inc.",
  description: "Law Enforcement & Public Safety Training Associates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* SINGLE site header/nav lives here (do NOT add another header in any page) */}
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="leading-tight">
              <div className="font-semibold">LEAPSTA, Inc.</div>
              <div className="text-sm text-slate-600">
                Law Enforcement &amp; Public Safety Training Associates
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link className="hover:underline" href="/about">
                About
              </Link>
              <Link className="hover:underline" href="/traffic-school">
                Traffic School
              </Link>
              <Link className="hover:underline" href="/responsible-vendor">
                Responsible Vendor
              </Link>
              <Link className="hover:underline" href="/high-school-programs">
                High School Programs
              </Link>
              <Link className="hover:underline" href="/law-enforcement">
                Law Enforcement
              </Link>
              <Link className="hover:underline" href="/contact-us">
                Contact Us
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} LEAPSTA, Inc.</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <Link className="hover:underline" href="/about">
                About
              </Link>
              <Link className="hover:underline" href="/contact-us">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}