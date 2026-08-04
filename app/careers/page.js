import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";

export const metadata = {
  title: "Careers",
  description:
    "Join Digal Solutions. View open positions in security, facility management, technical staffing and technology roles across Odisha and Eastern India.",
};

const benefits = [
  ["PF & ESI Coverage", "Statutory benefits managed and contributed on schedule.", "M3 11h18v10H3zM7 11V7a5 5 0 0 1 10 0v4"],
  ["Structured Training", "Induction and role-specific training before every deployment.", "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6"],
  ["Proper Equipment", "Site-appropriate PPE and gear issued and maintained.", "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"],
  ["Career Progression", "Pathways from field roles into supervisory positions.", "M13 2L4 14h6l-1 8 9-12h-6l1-8z"],
  ["Reachable Supervisors", "A defined reporting line and support at every site.", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"],
  ["Tech-Enabled Roles", "Exposure to GPS, AI monitoring and drone-supported work.", "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"],
  ["Timely Payments", "Consistent, on-schedule salary disbursement.", "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M12 6v6l4 2"],
  ["PAN India Placement", "Opportunities across our growing footprint of sites.", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
];

const jobs = [
  ["Site Supervisor cum Site Manager", ["FULL-TIME", "ODISHA", "OPERATIONS"]],
  ["Field Officer cum Training Officer", ["FULL-TIME", "ODISHA", "TRAINING"]],
  ["Security Guard", ["FULL-TIME", "MULTIPLE SITES", "SECURITY"]],
  ["Housekeeping & Facility Staff", ["FULL-TIME", "MULTIPLE SITES", "FACILITY"]],
  ["Drone Pilot / AI Monitoring Associate", ["FULL-TIME", "JHARSUGUDA", "TECHNOLOGY"]],
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="blueprint-bg"></div>
        <div className="wrap ph-inner">
          <div className="crumbs"><Link href="/">Home</Link> / Careers</div>
          <span className="eyebrow on-dark">JOIN THE TEAM</span>
          <h1 style={{ marginTop: 14 }}>Build your career on real industrial sites, not a training room floor.</h1>
          <p className="lead">
            We hire people who want to work with trained teams, modern equipment, and technology that backs them up
            in the field.
          </p>
          <div className="hero-btns" style={{ marginTop: 30 }}>
            <a href="#openings" className="btn btn-primary">
              View Open Positions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#apply" className="btn btn-outline-dark">Apply Now</a>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="wrap">
          <div className="two-col">
            <div className="reveal">
              <span className="eyebrow on-light">LIFE AT DIGAL</span>
              <h2 style={{ marginTop: 16, fontSize: "clamp(26px,3vw,36px)", fontWeight: 700 }}>Trained, equipped, and backed by a control room.</h2>
              <p style={{ marginTop: 16, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.8 }}>
                Our people work across power plants, steel and mining sites, hospitals and institutional campuses.
                Every deployment starts with structured training, proper equipment, and a supervisor who&apos;s
                reachable — not left to figure things out alone.
              </p>
              <p style={{ marginTop: 14, color: "var(--steel-500)", fontSize: 15.5, lineHeight: 1.8 }}>
                As we grow our technology capability, field roles increasingly work alongside smart helmets, GPS
                tracking and drone-supported inspection — giving our teams tools that traditional manpower agencies
                don&apos;t offer.
              </p>
            </div>
            <div className="reveal reveal-delay-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="Life.jpeg"
                alt="Digal Solutions team on-site"
                style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 14 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-light">EMPLOYEE BENEFITS</span>
            <h2>What you get working with us.</h2>
          </div>
          <div className="benefit-grid reveal">
            {benefits.map(([title, desc, d]) => (
              <div className="benefit-card" key={title}>
                <div className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={d} /></svg></div>
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="sec-pad sec-dark blueprint-bg">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-dark">OPEN POSITIONS</span>
            <h2>Current opportunities at Digal Solutions.</h2>
            <p>Sample listing format — update with live openings before publishing.</p>
          </div>
          <div className="job-list reveal">
            {jobs.map(([title, meta]) => (
              <div className="job-card" key={title}>
                <div>
                  <h4 style={{ color: "#fff" }}>{title}</h4>
                  <div className="job-meta">{meta.map((m) => <span key={m}>{m}</span>)}</div>
                </div>
                <a href="#apply" className="btn btn-outline-dark" style={{ padding: "11px 20px" }}>Apply</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="sec-pad" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow on-light">APPLY NOW</span>
            <h2>Submit your application.</h2>
          </div>
          <div className="reveal">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}
