"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const CLIENTS = [
  {
    name: "LIC",
    logo: "/logos/client-1.jpg",
    title: "LIC of India",
    service: "Service Provided: Housekeeping Services",
    note: "DIGAL Solutions successfully provided professional housekeeping manpower to LIC of India, Berhampur Division. Our team ensured cleanliness, facility maintenance, and smooth day-to-day operations by deploying over 120 trained housekeeping personnel.",
  },
  {
    name: "SAIL",
    logo: "/logos/client-2.png",
    title: "Steel Authority of India Limited (SAIL)",
    service: "Service Provided: Industrial Security Services",
    note: "DIGAL Solutions has provided professional industrial security services to SAIL, ensuring round-the-clock protection of plant premises, assets, employees, and operational facilities with trained security personnel.",
  },
  {
    name: "APGENCO",
    logo: "/logos/client-3.webp",
    title: "Andhra Pradesh Power Generation Corporation (APGENCO)",
    service: "Service Provided: Security & Facility Support",
    note: "DIGAL Solutions delivered reliable security and facility support services for APGENCO projects by deploying trained security personnel to safeguard power generation infrastructure and operational sites.",
  },
  {
    name: "BOUDH",
    logo: "/logos/client-4.jpg",
    title: "BOUDH",
    service: "Service Provided: Manpower & Facility Support",
    note: "DIGAL Solutions provided skilled manpower and facility support services for project operations in Boudh, ensuring efficient workforce management and uninterrupted execution of client requirements.",
  },
  {
    name: "SMC POWER",
    logo: "/logos/client-5.jpg",
    title: "SMC POWER",
    service: "Service Provided: Industrial Security Services",
    note: "DIGAL Solutions deployed trained security guards and supervisors to protect industrial assets, monitor site activities, and maintain a safe working environment for SMC Power's operations.",
  },
  {
    name: "BGR ENERGY",
    logo: "/logos/client-6.png",
    title: "BGR Energy Systems Limited",
    service: "Service Provided: Security & Housekeeping Services",
    note: "DIGAL Solutions provided comprehensive security and housekeeping services at the OPGCL Banaharpali project. Our workforce ensured the safety of plant infrastructure while maintaining clean and well-managed facilities throughout the contract period.",
  },
  {
    name: "OHPC",
    logo: "/logos/client-7.jpg",
    title: "Odisha Hydro Power Corporation (OHPC)",
    service: "Service Provided: Security Services & Technical Maintenance",
    note: "DIGAL Solutions has been a trusted service partner for multiple OHPC hydroelectric projects, including Burla, Mukhiguda, and Khatiguda. We deployed Security Officers, Assistant Security Officers, Gunmen, and Security Guards while also executing specialized technical works such as dismantling, repairing, rewinding, varnishing, and assembling electrical equipment.",
  },
  {
    name: "L&T",
    logo: "/logos/client-8.jpg",
    title: "Larsen & Toubro (L&T)",
    service: "Service Provided: Security, Housekeeping & O&M Support",
    note: "DIGAL Solutions has successfully partnered with Larsen & Toubro across multiple projects, providing security services, housekeeping manpower, and Operations & Maintenance (O&M) support for large-scale infrastructure and irrigation projects. Our trained workforce has ensured safe, efficient, and uninterrupted project execution.",
  },
  {
    name: "AMP",
    logo: "/logos/client-9.png",
    title: "AMP Energy",
    service: "Service Provided: Security & Housekeeping Services",
    note: "DIGAL Solutions provides comprehensive security and housekeeping services for AMP Energy's renewable energy project in Odisha. Our deployed team includes security supervisors, security guards, and housekeeping personnel, ensuring smooth site operations, safety, and facility maintenance.",
  },
];

export default function ClientsMarquee() {
  const [tooltip, setTooltip] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const showTooltip = (e, client) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      title: client.title,
      service: client.service,
      note: client.note,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const hideTooltip = () => setTooltip(null);

  return (
    <div className="client-marquee">
      <div className="client-track">
        {CLIENTS.map((c, i) => (
          <span
            key={i}
            className="client-logo"
            onMouseEnter={(e) => showTooltip(e, c)}
            onMouseLeave={hideTooltip}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.logo} alt={c.name} />
          </span>
        ))}
      </div>

      {mounted && tooltip &&
        createPortal(
          <div className="client-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
            <div className="ct-title">{tooltip.title}</div>
            <div className="ct-service">{tooltip.service}</div>
            <div className="ct-note">{tooltip.note}</div>
          </div>,
          document.body
        )}
    </div>
  );
}