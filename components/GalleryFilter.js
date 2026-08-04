"use client";

import { useState } from "react";

const filters = [
  { key: "all", label: "All" },
  { key: "security", label: "Security" },
  { key: "facility", label: "Facility Management" },
  { key: "tech", label: "Technology" },
  { key: "ops", label: "Field Operations" },
];

const items = [
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Security-1-819x1024.jpeg", alt: "Security deployment", cat: "security", caption: "Industrial Security Deployment", span: "g-span2 g-rowspan2" },
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Raghunatha-3-819x1024.jpeg", alt: "Field operations", cat: "ops", caption: "Field Operations", span: "" },
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Technology-integration-819x1024.png", alt: "Technology integration", cat: "tech", caption: "Technology Integration", span: "" },
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Quality-Assurance--819x1024.jpeg", alt: "Quality assurance process", cat: "facility", caption: "Quality Assurance", span: "" },
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Multiple-State-1024x576.jpeg", alt: "Multi-state operations", cat: "ops", caption: "Multi-State Site Operations", span: "g-span2" },
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Equipments-and-tools-2-1-819x1024.jpeg", alt: "Equipment and tools", cat: "facility", caption: "Equipment & Tools", span: "" },
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Additional-service-1-2-825x1024.jpeg", alt: "Additional services", cat: "facility", caption: "Facility Support Services", span: "" },
  { src: "https://digalsolutions.com/wp-content/uploads/2025/11/Odisha--1024x576.jpeg", alt: "Odisha regional operations", cat: "ops", caption: "Regional Site Coverage", span: "" },
];

export default function GalleryFilter() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? items : items.filter((it) => it.cat === active);
  const visibleKeys = new Set(visible.map((it) => it.src));

  return (
    <>
      <div className="g-filters reveal">
        {filters.map((f) => (
          <button key={f.key} className={active === f.key ? "active" : ""} onClick={() => setActive(f.key)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="g-grid reveal">
        {items.map((it) => (
          <div
            key={it.src}
            className={`g-item ${it.span}`}
            style={{ display: visibleKeys.has(it.src) ? "" : "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src} alt={it.alt} />
            <div className="g-cap"><span>{it.caption}</span></div>
          </div>
        ))}
      </div>
    </>
  );
}
