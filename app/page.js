import Link from "next/link";
import Counter from "@/components/Counter";
import ServicesGrid from "@/components/ServicesGrid";
import GalleryFilter from "@/components/GalleryFilter";
import ContactForm from "@/components/ContactForm";
import CertificationsGrid from "@/components/CertificationsGrid";
import ClientsMarquee from "@/components/ClientsMarquee";


export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section id="hero">
        <div className="blueprint-bg"></div>
        <div className="wrap hero-inner">
          <div className="reveal in">
            <span className="eyebrow on-dark">EST. 2013 &middot; 13+ YEARS OF INDUSTRIAL OPERATIONS</span>
            <h1 className="typewriter">
              {(() => {
                let i = 0;
                const renderChars = (text, extraProps = {}) =>
                  text.split("").map((char) => (
                    <span key={i} style={{ animationDelay: `${i++ * 0.03}s` }} {...extraProps}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ));
                return (
                  <>
                    {renderChars("Powering Industries")}
                    <span className="hl">{renderChars("  Through Smart Workforce")}</span>
                    {renderChars(" & Intelligent Engineering ")}
                    {renderChars(" Solutions ")}
                  </>
                );
              })()}
            </h1>
            <p className="lead">
              Delivering manpower, industrial security, facility management, AI monitoring, IoT solutions, drone
              inspections, and infrastructure operations for over 13 years — engineered for the demands of India&apos;s
              heavy industry.
            </p>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-primary">
                Request Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <Link href="#services" className="btn btn-outline-dark">Explore Services</Link>
            </div>
            <div className="hero-tags">
              <span>PAN INDIA DEPLOYMENT</span>
              <span>AI-ENABLED WORKFORCE</span>
              <span>PSARA COMPLIANT</span>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay-2 in">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="first.jpeg" alt="Digal Solutions trained security personnel on an industrial site" />
            </div>
            <div className="hud-chip c1"><span className="dot"></span> GPS LOCK: SITE-14</div>
            <div className="hud-chip c2"><span className="dot"></span> PERSONNEL: VERIFIED</div>
            <div className="hud-chip c3"><span className="dot"></span> AI DETECTION: ACTIVE</div>
            <div className="hud-chip c4"><span className="dot"></span> STATUS: ON DUTY</div>
          </div>
        </div>
      </section>

      {/* ================= LIVE OPS TICKER ================= */}
      <div id="ticker">
        <div className="tickwrap">
          <div className="tick-label"><span className="pulse"></span> LIVE OPS</div>
          <div className="tick-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                <span><b>50+</b> sites under active management &nbsp;&middot;&nbsp; <i>Odisha &amp; Eastern India</i></span>
                <span><b>1,000+</b> personnel deployed across client sites</span>
                <span><b>13+ yrs</b> continuous industrial operations since <i>2013</i></span>
                <span><b>100%</b> statutory &amp; PSARA compliance</span>
                <span><b>24/7</b> control-room monitoring &amp; incident response</span>
                <span><b>PAN India</b> project mobilisation capability</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ABOUT PREVIEW ================= */}
      <section id="about" className="sec-pad">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-media reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="second.jpeg" alt="Digal Solutions leadership on-site" />
              <div className="about-card">
                <div className="num">13+</div>
                <div className="lbl">Years engineering workforce &amp; industrial operations</div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <span className="eyebrow on-light">ABOUT DIGAL SOLUTIONS</span>
              <h2>A technology-enabled workforce partner built for India&apos;s heavy industry.</h2>
              <p style={{ marginTop: 18, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.75 }}>
                Founded in 2013, Digal Solutions began with a simple mandate: bring discipline and accountability to
                industrial manpower. Today, we operate as a full-scale workforce and engineering solutions partner —
                combining trained personnel with AI monitoring, IoT devices, and drone-based inspection to give
                clients complete visibility over every site we manage.
              </p>
              <p style={{ marginTop: 12, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.75 }}>
                Unlike traditional manpower agencies, every deployment we run is technology-enabled — from smart
                helmets with live camera feeds to GPS-tracked patrols and digital incident reporting — built for
                clients in oil &amp; gas, power, steel, mining, and infrastructure who cannot afford blind spots.
              </p>
              <div style={{ marginTop: 26 }}>
                <Link href="/about" className="btn btn-outline-light">
                  More About Us
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="sec-pad" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-light">WHAT WE DO</span>
            <h2>Client-specific, trained teams — not just manpower on a roster.</h2>
            <p>
              Twelve integrated service lines covering workforce, security, facility operations, and the technology
              layer that makes every deployment measurable.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section id="tech" className="sec-pad blueprint-bg">
        <div className="wrap">
          <div className="tech-grid">
            <div className="reveal">
              <span className="eyebrow on-dark">THE TECHNOLOGY LAYER</span>
              <h2>Every deployment is monitored, mapped, and measurable.</h2>
              <p style={{ marginTop: 16, color: "var(--steel-300)", fontSize: 15.5, lineHeight: 1.75 }}>
                We layer AI, IoT, and aerial technology over trained personnel so clients get real-time oversight
                instead of paperwork after the fact.
              </p>
              <div className="tech-list">
                <div className="tech-row">
                  <div className="tr-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" /><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" /></svg></div>
                  <div><h4>AI Monitoring &amp; Analytics</h4><p>Automated anomaly and intrusion detection across live feeds</p></div>
                </div>
                <div className="tech-row">
                  <div className="tr-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></div>
                  <div><h4>IoT Device Development</h4><p>Custom sensor networks for site &amp; asset telemetry</p></div>
                </div>
                <div className="tech-row">
                  <div className="tr-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" /></svg></div>
                  <div><h4>Drone Surveillance</h4><p>Aerial inspection for pipelines, towers &amp; industrial assets</p></div>
                </div>
                <div className="tech-row">
                  <div className="tr-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                  <div><h4>GPS Tracking &amp; Cloud Monitoring</h4><p>Live location, geofencing &amp; patrol verification</p></div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="dash">
                <div className="dash-top">
                  <span className="lbl">DIGAL &middot; OPERATIONS CONSOLE</span>
                  <div className="dots"><span></span><span></span><span></span></div>
                </div>
                <div className="dash-grid">
                  <div className="dash-card">
                    <div className="dc-lbl">ACTIVE SITES</div>
                    <div className="dc-val"><Counter target={50} suffix="+" /></div>
                    <div className="dc-sub">&#9650; nominal</div>
                  </div>
                  <div className="dash-card">
                    <div className="dc-lbl">PERSONNEL ON DUTY</div>
                    <div className="dc-val"><Counter target={1000} suffix="+" /></div>
                    <div className="dc-sub">&#9650; nominal</div>
                  </div>
                  <div className="dash-card">
                    <div className="dc-lbl">PATROL ACTIVITY</div>
                    <div className="dash-bars">
                      {[40, 65, 35, 80, 55, 90, 48, 70, 60, 85].map((h, i) => (
                        <i key={i} style={{ height: `${h}%` }}></i>
                      ))}
                    </div>
                  </div>
                  <div className="dash-card">
                    <div className="dc-lbl">AI ALERTS TODAY</div>
                    <div className="dc-val"><Counter target={6} /></div>
                    <div className="dc-sub">all resolved</div>
                  </div>
                  <div className="dash-map">
                    <svg viewBox="0 0 400 130">
                      <g opacity="0.35" stroke="#ffffff" strokeWidth="0.6">
                        <path d="M0 20h400M0 45h400M0 70h400M0 95h400M0 120h400" opacity="0.25" />
                      </g>
                      <path d="M20 100 L90 60 L150 80 L210 40 L280 55 L360 25" fill="none" stroke="#FF6A13" strokeWidth="2" />
                      <circle cx="20" cy="100" r="4" fill="#FF6A13" />
                      <circle cx="150" cy="80" r="4" fill="#5C8DDE" />
                      <circle cx="280" cy="55" r="4" fill="#5C8DDE" />
                      <circle cx="360" cy="25" r="5" fill="#FF6A13">
                        <animate attributeName="r" values="4;7;4" dur="1.8s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SMART HELMET ================= */}
      <section id="helmet" className="sec-pad">
        <div className="wrap">
          <div className="helmet-grid">
            <div className="helmet-visual reveal">
              <div className="frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="helmet.png" alt="Smart helmet technology integration for field workforce" />
              </div>
              <div className="floating-chip fc1"><div className="fc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg></div><div><div className="fc-t">Live Camera</div><div className="fc-s">STREAMING</div></div></div>
              <div className="floating-chip fc2"><div className="fc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><div className="fc-t">GPS</div><div className="fc-s">LOCKED</div></div></div>
              <div className="floating-chip fc3"><div className="fc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01" /><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg></div><div><div className="fc-t">SOS Alert</div><div className="fc-s">STANDBY</div></div></div>
              <div className="floating-chip fc4"><div className="fc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></svg></div><div><div className="fc-t">Voice Comm</div><div className="fc-s">OPEN CHANNEL</div></div></div>
              <div className="floating-chip fc5"><div className="fc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h1v1H9zM14 9h1v1h-1zM9 14h1v1H9zM14 14h1v1h-1z" /></svg></div><div><div className="fc-t">AI Detection</div><div className="fc-s">SCANNING</div></div></div>
              <div className="floating-chip fc6"><div className="fc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 15l4-6 4 3 5-8" /></svg></div><div><div className="fc-t">Analytics</div><div className="fc-s">SYNCED</div></div></div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="eyebrow on-light">FLAGSHIP INNOVATION</span>
              <h2>The Smart Helmet — AI-powered protection for every worker in the field.</h2>
              <p style={{ marginTop: 16, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.75 }}>
                Our AI-enabled smart helmet gives field personnel and control-room supervisors a shared, real-time
                view of every site — combining live video, location, and vitals-aware alerts into a single connected
                device.
              </p>
              <div className="helmet-features">
                <div className="hf-item"><span className="hf-dot"></span><span>Live camera &amp; streaming</span></div>
                <div className="hf-item"><span className="hf-dot"></span><span>Real-time GPS tracking</span></div>
                <div className="hf-item"><span className="hf-dot"></span><span>One-touch SOS alerts</span></div>
                <div className="hf-item"><span className="hf-dot"></span><span>Two-way voice communication</span></div>
                <div className="hf-item"><span className="hf-dot"></span><span>AI hazard detection</span></div>
                <div className="hf-item"><span className="hf-dot"></span><span>Integrated IoT sensors</span></div>
                <div className="hf-item"><span className="hf-dot"></span><span>Automated incident alerts</span></div>
                <div className="hf-item"><span className="hf-dot"></span><span>Field analytics dashboard</span></div>
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 30 }}>
                Request a Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DRONE SURVEILLANCE ================= */}
      <section id="drone" className="sec-pad">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">AERIAL INSPECTION</span>
            <h2>Drone surveillance for infrastructure you can&apos;t inspect on foot.</h2>
            <p>High-resolution aerial data for assets that are remote, elevated, or hazardous to access manually.</p>
          </div>
          <div className="drone-hero reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="drone.png" alt="Aerial inspection over industrial infrastructure" />
            <div className="dh-content">
              <div className="drone-chip-row">
                <span>4K AERIAL IMAGING</span>
                <span>THERMAL &amp; GAS DETECTION</span>
                <span>AUTOMATED FLIGHT PATHS</span>
                <span>DIGITAL INSPECTION REPORTS</span>
              </div>
            </div>
          </div>
          <div className="drone-apps reveal">
            <div className="da-item"><div className="da-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M6 12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4" /></svg></div><h5>Pipelines &amp; Transmission Lines</h5></div>
            <div className="da-item"><div className="da-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="9" width="16" height="12" rx="1" /><path d="M9 21V13h6v8" /></svg></div><h5>Industrial Plants &amp; Chimneys</h5></div>
            <div className="da-item"><div className="da-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></svg></div><h5>Solar &amp; Wind Farms</h5></div>
            <div className="da-item"><div className="da-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20l6-10 4 6 3-5 7 9H2z" /></svg></div><h5>Mining Areas &amp; Bridges</h5></div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section id="industries" className="sec-pad" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head center reveal" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow on-light">INDUSTRIES WE SERVE</span>
            <h2>Built for sectors that don&apos;t tolerate downtime.</h2>
          </div>
          <div className="ind-grid reveal">
            {[
              { label: "Oil & Gas", d: "M10 2v6M14 2v6M6 8h12l-2 12H8z" },
              { label: "Power", d: "M13 2L4 14h6l-1 8 9-12h-6l1-8z" },
              { label: "Manufacturing", d: "M2 7h20v14H2zM7 7V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" },
              { label: "Infrastructure", d: "M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" },
              { label: "Steel", d: "M12 2L2 8l10 6 10-6-10-6zM2 16l10 6 10-6M2 12l10 6 10-6" },
              { label: "Mining", d: "M2 20l6-10 4 6 3-5 7 9H2z" },
              { label: "Renewable Energy", d: "M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3" },
              { label: "Government", d: "M3 21h18M5 21V7l7-4 7 4v14M9 9h1M9 13h1M14 9h1M14 13h1" },
              { label: "Telecom", d: "M9 18h6" },
              { label: "Construction", d: "M2 21h20M4 21V10l4-3 4 3v11M12 21v-7l4-3 4 3v7" },
            ].map((it) => (
              <div className="ind-item" key={it.label}>
                <div className="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={it.d} /></svg></div>
                <span>{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section id="stats" className="sec-pad">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">WHY CHOOSE DIGAL SOLUTIONS</span>
            <h2>Numbers built on 13 years of on-ground delivery.</h2>
          </div>
          <div className="stats-grid reveal">
            <div className="stat-cell"><div className="sv"><Counter target={13} suffix="+" /></div><div className="sl">Years in operation</div></div>
            <div className="stat-cell"><div className="sv"><Counter target={1000} suffix="+" /></div><div className="sl">Workforce deployed</div></div>
            <div className="stat-cell"><div className="sv"><Counter target={300} suffix="+" /></div><div className="sl">Projects delivered</div></div>
            <div className="stat-cell"><div className="sv"><Counter target={50} suffix="+" /></div><div className="sl">Active managed sites</div></div>
          </div>
          <div className="reasons-strip reveal">
            <div className="reason"><div className="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V10l7-5 7 5v11" /></svg></div><h4>PAN India Mobilisation</h4><p>Capability to deploy trained teams across states within a defined lead time.</p></div>
            <div className="reason"><div className="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></div><h4>Technology Driven</h4><p>AI, IoT and drone tooling layered over every workforce deployment.</p></div>
            <div className="reason"><div className="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div><h4>24/7 Support</h4><p>Round-the-clock control-room monitoring and incident response.</p></div>
            <div className="reason"><div className="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div><h4>Safety First Culture</h4><p>Documented protocols, PPE standards and emergency response training.</p></div>
          </div>
        </div>
      </section>

     
      {/* ================= GALLERY ================= */}
      <section id="gallery" className="sec-pad">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">PROJECT GALLERY</span>
            <h2>On the ground, across Odisha and Eastern India.</h2>
          </div>
          <GalleryFilter />
        </div>
      </section>
      
      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="sec-pad" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-light">CLIENT FEEDBACK</span>
            <h2>What site &amp; facility teams say about working with us.</h2>
            <p>Sample testimonial format — replace with direct client quotes before publishing.</p>
          </div>
          <div className="test-grid reveal">
            {[
              { q: "Digal's security team integrated smoothly with our site protocols — reporting is consistent and response time to incidents has been fast.", who: "Operations Manager", org: "Power Sector Client", av: "OM" },
              { q: "The facility management crew has kept our plant premises consistently clean and audit-ready across multiple statutory inspections.", who: "Facility Head", org: "Manufacturing Client", av: "FH" },
              { q: "GPS-tracked patrols and digital reporting gave our safety team visibility we simply didn't have with our previous manpower vendor.", who: "HSE Coordinator", org: "Infrastructure Client", av: "HS" },
            ].map((t) => (
              <div className="test-card" key={t.av}>
                <div className="quote-i"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 7H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V8a1 1 0 0 0-1-1zM20 7h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V8a1 1 0 0 0-1-1z" /></svg></div>
                <p>{t.q}</p>
                <div className="who">
                  <div className="avatar">{t.av}</div>
                  <div><h5>{t.who}</h5><span>{t.org}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section id="clients" style={{ padding: "48px 0" }}>
        <div className="wrap">
          <p style={{ textAlign: "center", fontFamily: "var(--font-plex-mono), monospace", fontSize: 12, letterSpacing: ".08em", color: "var(--steel-500)", marginBottom: 26 }}>
            TRUSTED BY LEADING INDUSTRIAL ORGANISATIONS
          </p>
        </div>
        <ClientsMarquee />
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="sec-pad" style={{ paddingTop: 20, background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-light">CERTIFICATIONS &amp; REGISTRATIONS</span>
            <h2>Operating within a fully compliant statutory framework.</h2>
          </div>
          <CertificationsGrid />
        </div>
      </section>
      {/* ================= CONTACT ================= */}
      <section id="contact" className="sec-pad">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">GET IN TOUCH</span>
            <h2>Let&apos;s discuss your workforce &amp; operations requirement.</h2>
          </div>
          <div className="contact-grid reveal">
            <div>
              <div className="c-info-item">
                <div className="ci-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                <div><h5>PHONE</h5><a href="tel:+917325827077">+91 73258 27077</a><br /><a href="tel:+919040349973">+91 90403 49973</a></div>
              </div>
              <div className="c-info-item">
                <div className="ci-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 6l-10 7L2 6" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg></div>
                <div><h5>EMAIL</h5><a href="mailto:sanjit@digalsolutions@gmail.com">sanjit@digalsolutions@gmail.com</a></div>
              </div>
              <div className="c-info-item">
                <div className="ci-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                <div><h5>REGISTERED OFFICE</h5><p>Plot No. 226/508, Near TVS Showroom, Bandhabahal, Jharsuguda, Odisha</p></div>
              </div>
              <div className="c-info-item">
                <div className="ci-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 3a5.5 5.5 0 0 0-5.5 5.5c0 1.6.6 2.9 1.7 4l-8 8 2.3 2.3 8-8c1.1 1.1 2.4 1.7 4 1.7A5.5 5.5 0 1 0 17.5 3z" /></svg></div>
                <div><h5>WHATSAPP</h5><a href="https://wa.me/918458066713" target="_blank" rel="noreferrer">Chat with our team</a></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}