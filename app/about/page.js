import Link from "next/link";
import TypewriterHeading from "@/components/TypewriterHeading";
import Timeline from "@/components/Timeline";
export const metadata = {
  title: "About Us",
  description:
    "Learn about Digal Solutions - 13+ years engineering technology-enabled workforce, security and facility management solutions across India.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="blueprint-bg"></div>
        <div className="wrap ph-inner">
          <div className="crumbs"><Link href="/">Home</Link> / About Us</div>
          <span className="eyebrow on-dark">WHO WE ARE</span>
   <TypewriterHeading
  text="Thirteen years of building a workforce partner that industry can rely on."
  style={{ marginTop: 14 }}
/>
          <p className="lead">
            From a single security contract in Odisha to a PAN-India, technology-enabled workforce and engineering
            solutions company — this is the Digal Solutions story.
          </p>
        </div>
      </section>

      <section className="sec-pad">
        <div className="wrap">
          <div className="two-col">
            <div className="reveal">
              <span className="eyebrow on-light">OUR STORY</span>
              <h2 style={{ marginTop: 16, fontSize: "clamp(26px,3vw,36px)", fontWeight: 700 }}>Built on-site, not in a boardroom.</h2>
              <p style={{ marginTop: 16, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.8 }}>
                Digal Solutions was founded in 2013 to solve a problem every industrial site manager in Odisha
                understood well: manpower vendors that promised reliability but delivered neither training nor
                accountability. We started with trained security personnel on a handful of sites and grew, contract
                by contract, into a full-scale workforce and facility management partner.
              </p>
              <p style={{ marginTop: 14, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.8 }}>
                Today, that same discipline extends across housekeeping, technical staffing, and industrial
                engineering support — with a technology layer built on top of it. Smart helmets, GPS-tracked
                patrols, drone inspection and AI monitoring exist at Digal Solutions for one reason: to give clients
                proof of the work being done, not just a promise that it happened.
              </p>
              <p style={{ marginTop: 14, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.8 }}>
                We work with clients across power, steel, mining, and infrastructure — sectors where a gap in
                coverage has real operational and safety consequences. That context shapes everything about how we
                train, deploy, and monitor our people.
              </p>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ borderRadius: 14, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="our_journey.jpeg"
                  alt="Digal Solutions field team"
                  style={{ width: "100%", height: 520, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad sec-dark blueprint-bg">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">MISSION &amp; VISION</span>
            <h2>What we&apos;re building toward.</h2>
          </div>
          <div className="two-col">
            <div className="reveal mv-card" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", borderRadius: 14, padding: 30 }}>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Mission</h3>
              <p style={{ color: "var(--steel-300)", fontSize: 14.5, lineHeight: 1.75 }}>
                To deliver trained, technology-enabled workforce and facility solutions that industrial clients can
                measure, audit, and depend on — every shift, every site.
              </p>
            </div>
            <div className="reveal reveal-delay-1 mv-card" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", borderRadius: 14, padding: 30 }}>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Vision</h3>
              <p style={{ color: "var(--steel-300)", fontSize: 14.5, lineHeight: 1.75 }}>
                To be India&apos;s most trusted technology-enabled industrial workforce partner — recognised as much
                for our engineering capability as for our manpower strength.
              </p>
            </div>
          </div>
          <div className="values-list" style={{ marginTop: 50 }}>
            {[
              ["Integrity", "Transparent, ethical conduct with clients, employees and stakeholders.", "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"],
              ["Professionalism", "Trained, qualified personnel held to documented service standards.", "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6"],
              ["Reliability", "Dependable coverage and prompt response, without exception.", "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"],
              ["Safety", "Protecting clients, our people and the public through robust protocols.", "M3 11h18v10H3zM7 11V7a5 5 0 0 1 10 0v4"],
              ["Customer Focus", "Personalised solutions built around each client's actual requirement.", "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M12 7v5l3 3"],
              ["Innovation", "Embracing AI, IoT and drone technology to stay ahead of site risk.", "M13 2L4 14h6l-1 8 9-12h-6l1-8z"],
              ["Teamwork", "Collaboration between field teams, control room and clients.", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"],
              ["Community", "Supporting the regions and workforce communities we operate in.", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
            ].map(([title, desc, d]) => (
              <div className="value-item" key={title}>
                <div className="vi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={d} /></svg></div>
                <div><h4 style={{ color: "#fff" }}>{title}</h4><p style={{ color: "var(--steel-300)" }}>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-pad" style={{ background: "var(--navy-950)" }}>
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow on-light">LEADERSHIP</span>
      <h2 style={{ color: "#fff" }}>The team steering Digal Solutions.</h2>
    </div>
    <div className="lead-grid reveal">
      <div className="lead-card">
        <div className="lc-av">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/leadership/rajendra-digal.jpg" alt="Rajendra Kumar Digal" />
        </div>
        <div>
          <div className="lc-name-row">
            <h4>Rajendra Kumar Digal</h4>
            <a href="https://www.linkedin.com/in/rajendra-digal-XXXXXX" target="_blank" rel="noopener noreferrer" aria-label="Rajendra Kumar Digal on LinkedIn" className="lc-linkedin">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>
          <div className="role">DIRECTOR</div>
          <p>Founded Digal Solutions in 2013 and continues to set the direction for the firm&apos;s growth across Odisha and Eastern India.</p>
        </div>
      </div>
      <div className="lead-card">
        <div className="lc-av">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/leadership/rahul-digal.jpg" alt="Rahul Digal" />
        </div>
        <div>
          <div className="lc-name-row">
            <h4>Rahul Digal</h4>
            
          </div>
          <div className="role">CEO</div>
          <p>Tech-driven entrepreneur transforming security and manpower with AI, innovation, and discipline.</p>
        </div>
        <a href="https://www.linkedin.com/in/rahuldigal/" target="_blank" rel="noopener noreferrer" aria-label="Rahul Digal on LinkedIn" className="lc-linkedin">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
      </div>
      <div className="lead-card">
        <div className="lc-av">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/leadership/sanjit-padhan.jpg" alt="Sanjit Kumar Padhan" />
        </div>
        <div>
          <div className="lc-name-row">
            <h4>Sanjit Kumar Padhan</h4>
            
          </div>
          <div className="role">COO &amp; CTO</div>
          <p>Driving AI, IoT, and smart operations to transform security and workforce management.</p>
        </div>
        <a href="https://www.linkedin.com/in/sanjit-kumar-padhan/" target="_blank" rel="noopener noreferrer" aria-label="Sanjit Kumar Padhan on LinkedIn" className="lc-linkedin">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
      </div>
    </div>
  </div>
</section>
<section className="sec-pad">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="eyebrow on-light">OUR JOURNEY</span>
      <h2>Growth, one contract at a time.</h2>
    </div>
    <div className="timeline reveal">
      <Timeline />
    </div>
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <Link href="/careers" className="btn btn-primary">
        Join Our Team
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  </div>
</section>

    </>
  );
}