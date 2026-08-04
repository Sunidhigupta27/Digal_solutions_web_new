import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <div className="svc-grid">
      {services.map((s) => (
        <div className="svc-card bracket-frame" key={s.tag}>
          <span className="bf-tr"></span>
          <span className="bf-bl"></span>
          <span className="tag">{s.tag}</span>
          <div className="si">{s.icon}</div>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
          <Link href="/services" className="sl">
            Learn more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
