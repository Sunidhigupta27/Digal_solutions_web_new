import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <Image src="/logo.png" alt="Digal Solutions" width={177} height={160} style={{ height: 36, width: "auto" }} />
            </div>
            <p className="desc">
              Technology-enabled industrial workforce, security, and facility management solutions —
              engineering the future of operations across India.
            </p>
            <div className="foot-social">
              {/* <a href="https://www.facebook.com/digalsolutions" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" /></svg>
              </a> */}
              <a href="https://www.instagram.com/digalsolutions?igsh=MXhldzIyYzUzNjMzNg==" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/digalsolutions/posts/?feedView=all" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.24h4.5V23h-4.5V8.24zM8.5 8.24h4.31v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.68c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4.5V8.24z" /></svg>
              </a>
              {/* <a href="https://x.com/DigalSolutions" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.3 22H1.2l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" /></svg>
              </a> */}
            </div>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/#gallery">Projects</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><Link href="/services">Total Manpower Solutions</Link></li>
              <li><Link href="/services">Industrial Security</Link></li>
              <li><Link href="/services">Facility Management</Link></li>
              <li><Link href="/#helmet">Smart Helmet Technology</Link></li>
              <li><Link href="/#drone">Drone Surveillance</Link></li>
            </ul>
          </div>
          <div>
            <h5>Industries</h5>
            <ul>
              <li><Link href="/#industries">Oil &amp; Gas</Link></li>
              <li><Link href="/#industries">Power</Link></li>
              <li><Link href="/#industries">Steel &amp; Mining</Link></li>
              <li><Link href="/#industries">Infrastructure</Link></li>
              <li><Link href="/#industries">Government</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} Digal Solutions. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
