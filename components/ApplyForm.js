"use client";

export default function ApplyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-form" style={{ maxWidth: 640 }}>
      <form onSubmit={handleSubmit}>
        <div className="cf-grid">
          <div className="cf-field">
            <label>Full Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="cf-field">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91" required />
          </div>
        </div>
        <div className="cf-field">
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="cf-field">
          <label>Position Applying For</label>
          <select>
            <option>Site Supervisor cum Site Manager</option>
            <option>Field Officer cum Training Officer</option>
            <option>Security Guard</option>
            <option>Housekeeping &amp; Facility Staff</option>
            <option>Drone Pilot / AI Monitoring Associate</option>
            <option>Other</option>
          </select>
        </div>
        <div className="cf-field">
          <label>Location Preference</label>
          <input type="text" placeholder="e.g. Jharsuguda, Bhubaneswar" />
        </div>
        <div className="cf-field">
          <label>Message / Experience</label>
          <textarea placeholder="Tell us about your relevant experience" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
          Submit Application
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
        <p style={{ fontSize: 11.5, color: "var(--steel-500)", marginTop: 12, textAlign: "center" }}>
          Demo form — connect to your HR inbox or applicant tracker before publishing.
        </p>
      </form>
    </div>
  );
}
