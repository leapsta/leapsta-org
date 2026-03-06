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
      <body>
        {/* HEADER (single) */}
        <header style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontWeight: 800 }}>LEAPSTA, Inc.</div>
              <div style={{ fontSize: 12, color: "#4b5563" }}>
                Law Enforcement & Public Safety Training Associates
              </div>
            </div>

            <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/about">About</Link>
              <Link href="/traffic-school">Traffic School</Link>
              <Link href="/responsible-vendor">Responsible Vendor</Link>
              <Link href="/high-school-programs">High School Programs</Link>
              <Link href="/law-enforcement">Law Enforcement</Link>
              <Link href="/contact-us">Contact Us</Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 16px" }}>
          {children}
        </main>

        {/* FOOTER (single) */}
        <footer style={{ borderTop: "1px solid #e5e7eb", background: "#fff" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              fontSize: 12,
              color: "#4b5563",
            }}
          >
            <div>© {new Date().getFullYear()} LEAPSTA, Inc.</div>

            <div style={{ display: "flex", gap: 14 }}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact-us">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}