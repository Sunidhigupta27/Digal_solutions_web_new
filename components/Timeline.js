"use client";
import { useEffect, useRef, useState } from "react";

const TIMELINE_DATA = [
  ["2013", "Company Foundation", "DIGAL SOLUTIONS was established in Odisha to provide professional Security Services, Housekeeping, and Skilled Manpower solutions for industrial, commercial, and government organizations."],
  ["2015", "Major Industrial Projects", "Secured long-term contracts with Larsen & Toubro (L&T) and BGR Energy Systems Ltd., delivering reliable Security and Housekeeping Services for major power and infrastructure projects."],
  ["2020", "Statewide Expansion", "Expanded operations across Odisha by partnering with Odisha Hydro Power Corporation (OHPC) at Upper Indravati, Hirakud, and Khatiguda Hydro Electric Projects, deploying hundreds of trained security personnel."],
  ["2023", "Growing Client Portfolio", "Strengthened partnerships with LIC of India, L&T Mega Irrigation Project, and KJSPL Samaleswari Coal Mines by providing Security, Housekeeping, and Facility Management Services."],
  ["2025", "Operations & Maintenance", "Expanded into Operations & Maintenance (O&M), Renewable Energy, and Technical Maintenance projects through contracts with AMP Energy and OHPC while continuing industrial security operations."],
  ["2026", "Trusted Industry Partner", "Currently executing major O&M projects for Larsen & Toubro and Mahanadi Coalfields Limited (MCL), providing integrated Security, Housekeeping, Technical Maintenance, and Skilled Manpower Services across India."],
];

export default function Timeline() {
  const trackRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.25 }
    );
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`timeline-track ${inView ? "tl-in-view" : ""}`} ref={trackRef}>
      <div className="tl-line">
        <div className="tl-line-fill"></div>
      </div>
      {TIMELINE_DATA.map(([yr, title, desc], i) => (
        <div
          className="tl-item"
          key={yr}
          style={{ transitionDelay: `${i * 0.18}s` }}
        >
          <div className="tl-dot" style={{ transitionDelay: `${i * 0.18}s` }}></div>
          <div className="tl-yr" style={{ transitionDelay: `${i * 0.18 + 0.1}s` }}>{yr}</div>
          <h5 style={{ transitionDelay: `${i * 0.18 + 0.15}s` }}>{title}</h5>
          <p style={{ transitionDelay: `${i * 0.18 + 0.2}s` }}>{desc}</p>
        </div>
      ))}
    </div>
  );
}