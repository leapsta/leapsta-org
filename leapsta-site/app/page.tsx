"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Hotspot = {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  leftPct: number;
  topPct: number;
  widthPct: number;
  heightPct: number;
};

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const HOTSPOTS: Hotspot[] = useMemo(
    () => [
      {
        id: "traffic",
        href: "/traffic-school",
        title: "Florida Approved Online Traffic School",
        subtitle: "Florida-approved online traffic courses",
        leftPct: 6,
        topPct: 39,
        widthPct: 17.25,
        heightPct: 25.2,
      },
      {
        id: "vendor",
        href: "/responsible-vendor",
        title: "Florida Responsible Vendor Training",
        subtitle: "Responsible alcohol service training",
        leftPct: 29.5,
        topPct: 39,
        widthPct: 17.25,
        heightPct: 25.2,
      },
      {
        id: "highschool",
        href: "/high-school",
        title: "High School Traffic Safety Programs",
        subtitle: "Education for students & schools",
        leftPct: 53.5,
        topPct: 39,
        widthPct: 17.25,
        heightPct: 25.2,
      },
      {
        id: "law",
        href: "/law-enforcement",
        title: "Law Enforcement Specialized Training",
        subtitle: "Professional training & instruction",
        leftPct: 77.5,
        topPct: 39,
        widthPct: 15.87,
        heightPct: 25.2,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

          {/* LOGO / TITLE */}
          <div>
            <div className="text-sm font-semibold">LEAPSTA, Inc.</div>
            <div className="text-xs text-slate-600">
              Law Enforcement & Public Safety Training Associates
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">

            <Link href="/about" className="hover:text-slate-950">
              About
            </Link>

            <Link href="/traffic-school" className="hover:text-slate-950">
              Traffic School
            </Link>

            <Link href="/responsible-vendor" className="hover:text-slate-950">
              Responsible Vendor
            </Link>

            <Link href="/high-school" className="hover:text-slate-950">
              High School Programs
            </Link>

            <Link href="/law-enforcement" className="hover:text-slate-950">
              Law Enforcement
            </Link>

            <Link href="/contact" className="hover:text-slate-950">
              Contact Us
            </Link>

          </nav>

        </div>
      </header>

      {/* MAIN SECTION */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="rounded-3xl border bg-white shadow-sm">

          <div className="p-4 md:p-6">

            <div className="relative rounded-2xl border bg-slate-100 h-[600px] overflow-hidden">

              <img
                src="/banner1.png"
                alt="LEAPSTA banner"
                className="block w-full h-auto select-none -mt-10"
                draggable={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              {HOTSPOTS.map((spot) => {

                const isOn = hoveredId === spot.id;

                return (
                  <Link
                    key={spot.id}
                    href={spot.href}
                    aria-label={spot.title}
                    onMouseEnter={() => setHoveredId(spot.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="absolute rounded-xl transition-transform duration-200 ease-out"
                    style={{
                      left: `${spot.leftPct}%`,
                      top: `${spot.topPct}%`,
                      width: `${spot.widthPct}%`,
                      height: `${spot.heightPct}%`,
                      transform: isOn ? "scale(1.06)" : "scale(1)"
                    }}
                  >

                    <span
                      className="pointer-events-none absolute inset-0 rounded-xl transition-all duration-200"
                      style={{
                        background: isOn ? "rgba(255,255,255,0.10)" : "transparent",
                        border: isOn
                          ? "2px solid rgba(255,255,255,0.70)"
                          : "1px solid rgba(255,255,255,0)",
                        boxShadow: isOn
                          ? "0 10px 22px rgba(0,0,0,0.22)"
                          : "none"
                      }}
                    />

                    <span
                      className="pointer-events-none absolute left-1/2 top-[-10px] -translate-x-1/2 -translate-y-full rounded-xl border bg-white/95 px-3 py-2 text-xs shadow-lg transition-all duration-200"
                      style={{ opacity: isOn ? 1 : 0 }}
                    >
                      <div className="font-semibold text-slate-900">{spot.title}</div>
                      <div className="text-[11px] text-slate-600">{spot.subtitle}</div>
                    </span>

                  </Link>
                );

              })}

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="rounded-full border bg-white/90 px-4 py-2 text-xs font-semibold shadow">
                  Hover and click a program logo to view details
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}