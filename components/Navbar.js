"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const megaItems = [
  {
    href: "/services",
    title: "Total Manpower Solutions",
    desc: "Trained, verified industrial workforce",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: "/services",
    title: "Industrial Security",
    desc: "Trained guards & armed response",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4.5 8-11.8V5l-8-3-8 3v5.2C4 17.5 12 22 12 22z" />
      </svg>
    ),
  },
  {
    href: "/services",
    title: "Facility Management",
    desc: "Housekeeping & site operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    href: "/#drone",
    title: "Drone Surveillance",
    desc: "Aerial inspection & mapping",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" />
      </svg>
    ),
  },
  {
    href: "/#helmet",
    title: "Smart Helmet Technology",
    desc: "AI-enabled worker safety gear",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 18a10 10 0 0 1 20 0" />
        <path d="M2 18h20v2H2z" />
        <circle cx="12" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    href: "/#tech",
    title: "IoT & AI Monitoring",
    desc: "Connected industrial oversight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#tech", label: "Technology" },
  { href: "/#helmet", label: "Smart Helmet" },
  { href: "/#drone", label: "Drone Surveillance" },
  { href: "/#industries", label: "Industries" },
  { href: "/#gallery", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <div id="topbar">
        <div className="wrap">
          <div className="tb-left">
            <span>Professional Security & Manpower Solutions</span>
            <span></span>
          </div>
          <div className="tb-right">
            <a href="tel:+91 73258 27077" title="Call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a href="mailto:sanjit@digalsolutions@gmail.com" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 6l-10 7L2 6" />
                <path d="M2 6h20v12H2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/digalsolutions/" target="_blank" title="LinkedIn" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.24h4.5V23h-4.5V8.24zM8.5 8.24h4.31v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.68c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4.5V8.24z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <nav id="mainnav" className={scrolled ? "scrolled" : ""}>
        <div className="navwrap">
          <Link href="/" className="nav-logo">
            <Image src="/logo.png" alt="Digal Solutions" width={177} height={160} style={{ height: 38, width: "auto" }} priority />
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li>
              <Link href="/services">
                Services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
              </Link>
              <div className="mega">
                {megaItems.map((item) => (
                  <Link href={item.href} key={item.title}>
                    <span className="mi">{item.icon}</span>
                    <span>
                      <span className="mt">{item.title}</span>
                      <span className="md">{item.desc}</span>
                    </span>
                  </Link>
                ))}
                <Link href="/services" style={{ gridColumn: "1/-1", justifyContent: "center", background: "var(--paper)", marginTop: 6 }}>
                  <span className="mt" style={{ color: "var(--blue-600)" }}>View All 12 Services &rarr;</span>
                </Link>
              </div>
            </li>
            <li><Link href="/#tech">Technology</Link></li>
            <li><Link href="/#industries">Industries</Link></li>
            <li><Link href="/#gallery">Projects</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
          <div className="nav-cta">
            <Link href="/contact" className="btn btn-outline-dark" style={{ padding: "11px 20px" }}>Contact Us</Link>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "11px 22px" }}>Request Consultation</Link>
            <button id="burger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </nav>

      <div id="mobilemenu" className={menuOpen ? "open" : ""}>
        <div className="mm-top">
          <Image src="/logo.png" alt="Digal Solutions" width={177} height={160} style={{ height: 32, width: "auto" }} />
          <button className="mm-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <ul>
          {mobileLinks.map((l) => (
            <li key={l.label}><Link href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link></li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28, width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
          Request Consultation
        </Link>
      </div>
    </>
  );
}
