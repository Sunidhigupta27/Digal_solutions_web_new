import Link from "next/link";
import { services } from "@/lib/services";

export const metadata = {
  title: "Our Services",
  description:
    "Explore Digal Solutions' 12 integrated service lines: manpower, security, facility management, drone surveillance, smart helmets, AI monitoring and more.",
};

export default function ServicesPage() {
  return (
    <>
   <section className="page-hero">
        <div className="blueprint-bg"></div>
        <div className="wrap ph-inner">
          <div className="crumbs"><Link href="/">Home</Link> / Services</div>
          <span className="eyebrow on-dark">WHAT WE DELIVER</span>
          <h1 style={{ marginTop: 14 }} className="typewriter">
            {"Twelve integrated service lines, one accountable partner.".split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.03}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="lead">
            Every service is delivered as a client-specific, trained team with clear reporting structures — not a
            generic manpower placement.
          </p>
        </div>
      </section>

      <section className="sec-pad">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {services.map((s) => (
              <div className="svc-row reveal" key={s.tag}>
                <div className="sr-n">{s.tag}</div>
                <div>
                  <h3>{s.name}</h3>
                  <div className="sr-tags">
                    {s.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <div>
                  <p>{s.desc}</p>
                  <ul>
                    {s.benefits.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-pad sec-dark blueprint-bg">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">HOW WE WORK</span>
            <h2>A repeatable process, built for accountability.</h2>
          </div>
          <div className="process-row reveal">
            <div className="process-step"><div className="ps-n">01</div><h4 style={{ color: "#fff" }}>Assess</h4><p>We study the site, risk profile and existing coverage gaps before proposing a solution.</p></div>
            <div className="process-step"><div className="ps-n">02</div><h4 style={{ color: "#fff" }}>Deploy</h4><p>Trained, verified personnel and equipment mobilised against an agreed scope and timeline.</p></div>
            <div className="process-step"><div className="ps-n">03</div><h4 style={{ color: "#fff" }}>Monitor</h4><p>GPS tracking, AI monitoring and drone inspection layered over daily operations.</p></div>
            <div className="process-step"><div className="ps-n">04</div><h4 style={{ color: "#fff" }}>Report</h4><p>Digital incident logs and performance reporting delivered to your team on schedule.</p></div>
          </div>
        </div>
      </section>

      <section className="sec-pad" style={{ background: "var(--paper)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, marginBottom: 16 }}>Not sure which service fits your site?</h2>
          <p style={{ color: "var(--steel-500)", fontSize: 15, marginBottom: 28 }}>Talk to our team — we&apos;ll recommend a scope based on your industry and risk profile.</p>
          <Link href="/contact" className="btn btn-outline-light">
            Request a Consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
