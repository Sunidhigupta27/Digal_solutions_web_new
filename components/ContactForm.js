"use client";

export default function ContactForm({ title = "Request a Consultation", compact = false }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-form" style={compact ? { maxWidth: 640 } : undefined}>
      <h3 style={{ fontSize: 20, marginBottom: 22 }}>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="cf-grid">
          <div className="cf-field">
            <label>Full Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="cf-field">
            <label>Company Name</label>
            <input type="text" placeholder="Organisation" />
          </div>
          <div className="cf-field">
            <label>Email Address</label>
            <input type="email" placeholder="you@company.com" required />
          </div>
          <div className="cf-field">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91" />
          </div>
        </div>
        <div className="cf-field">
          <label>Service Required</label>
          <select>
            <option>Total Manpower Solutions</option>
            <option>Industrial Security</option>
            <option>Facility Management</option>
            <option>Drone Surveillance</option>
            <option>Smart Helmet / AI Monitoring</option>
            <option>IoT Device Development</option>
            <option>Other</option>
          </select>
        </div>
        {!compact && (
          <div className="cf-field">
            <label>Site Location</label>
            <input type="text" placeholder="City / State" />
          </div>
        )}
        <div className="cf-field">
          <label>Message</label>
          <textarea placeholder="Tell us about your requirement" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
          Schedule Consultation
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
        <p style={{ fontSize: 11.5, color: "var(--steel-500)", marginTop: 12, textAlign: "center" }}>
          Demo form — connect to your CRM or email service before publishing.
        </p>
      </form>
    </div>
  );
}
