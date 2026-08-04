import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Digal Solutions for a workforce, security or facility management consultation. Call, WhatsApp or send us your requirement.",
};

const faqs = [
  ["How quickly can Digal Solutions mobilise a new site?", "Mobilisation timelines depend on scope and location — our team confirms a firm deployment date once your requirement and site details are shared."],
  ["Do you operate outside Odisha?", "Yes. While our core presence is in Odisha and Eastern India, we mobilise trained teams PAN India for qualifying projects."],
  ["Can smart helmets and AI monitoring be added to an existing security contract?", "Yes — the technology layer can be added to new or existing deployments. Share your current setup and we'll scope the integration."],
  ["Are your personnel PSARA licensed and background verified?", "Yes, all security personnel are deployed under a valid PSARA license with documented background verification."],
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="blueprint-bg"></div>
        <div className="wrap ph-inner">
          <div className="crumbs"><Link href="/">Home</Link> / Contact</div>
          <span className="eyebrow on-dark">GET IN TOUCH</span>
          <h1 style={{ marginTop: 14 }}>Let&apos;s talk about your site&apos;s workforce &amp; security requirement.</h1>
          <p className="lead">Reach our team directly, or send us your requirement and we&apos;ll respond within one business day.</p>
        </div>
      </section>

      <section className="sec-pad">
        <div className="wrap">
          <div className="contact-grid" style={{ color: "var(--navy-900)" }}>
            <div>
              <div className="c-info-item" style={{ borderColor: "rgba(10,23,48,0.1)" }}>
                <div className="ci-i" style={{ background: "var(--paper)", color: "var(--blue-600)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                <div><h5 style={{ color: "var(--steel-500)" }}>PHONE</h5><a href="tel:+91 73258 27077" style={{ color: "var(--navy-900)" }}>+91 73258 27077</a><br /><a href="tel:++91 90403 49973" style={{ color: "var(--navy-900)" }}>+91 90403 49973</a></div>
              </div>
              <div className="c-info-item" style={{ borderColor: "rgba(10,23,48,0.1)" }}>
                <div className="ci-i" style={{ background: "var(--paper)", color: "var(--blue-600)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 6l-10 7L2 6" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg></div>
                <div><h5 style={{ color: "var(--steel-500)" }}>EMAIL</h5><a href="mailto:sanjit@digalsolutions@gmail.com" style={{ color: "var(--navy-900)" }}>sanjit@digalsolutions@gmail.com</a></div>
              </div>
              <div className="c-info-item" style={{ borderColor: "rgba(10,23,48,0.1)" }}>
                <div className="ci-i" style={{ background: "var(--paper)", color: "var(--blue-600)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                <div><h5 style={{ color: "var(--steel-500)" }}>REGISTERED OFFICE</h5><p style={{ color: "var(--navy-900)" }}>Plot No. 226/508, Near TVS Showroom, Bandhabahal, Jharsuguda, Odisha</p></div>
              </div>
              <div className="c-info-item" style={{ borderColor: "rgba(10,23,48,0.1)" }}>
                <div className="ci-i" style={{ background: "var(--paper)", color: "var(--blue-600)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                <div><h5 style={{ color: "var(--steel-500)" }}>RESPONSE TIME</h5><p style={{ color: "var(--navy-900)" }}>Within one business day</p></div>
              </div>
              <div className="c-info-item" style={{ borderColor: "rgba(10,23,48,0.1)" }}>
                <div className="ci-i" style={{ background: "var(--paper)", color: "var(--blue-600)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 3a5.5 5.5 0 0 0-5.5 5.5c0 1.6.6 2.9 1.7 4l-8 8 2.3 2.3 8-8c1.1 1.1 2.4 1.7 4 1.7A5.5 5.5 0 1 0 17.5 3z" /></svg></div>
                <div><h5 style={{ color: "var(--steel-500)" }}>WHATSAPP</h5><a href="https://wa.me/918458066713" target="_blank" rel="noreferrer" style={{ color: "var(--navy-900)" }}>Chat with our team</a></div>
              </div>
              <div className="map-frame reveal" style={{ marginTop: 26 }}>
                <iframe
                  loading="lazy"
                  title="Digal Solutions office location"
                  src="https://maps.google.com/maps?q=Bandhabahal%2C%20Jharsuguda%2C%20Odisha&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad" style={{ background: "var(--paper)", paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="sec-head reveal">
            <span className="eyebrow on-light">FAQ</span>
            <h2>Common questions before you reach out.</h2>
          </div>
          <div className="reveal">
            {faqs.map(([q, a], i) => (
              <details className="faq-item" key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
