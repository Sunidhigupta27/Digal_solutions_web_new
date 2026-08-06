// "use client";

// import { useState } from "react";
// import { createPortal } from "react-dom";

// const certifications = [
//   { label: "PSARA Licensed", d: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z", certificate: "/certificates/psara.jpg" },
//   { label: "ISO Certified", d: "M9 12l2 2 4-4M7.8 2.8a2 2 0 0 1 2.2-.4 2 2 0 0 0 2 0 2 2 0 0 1 2.2.4 2 2 0 0 0 1.4 1.4 2 2 0 0 1 .4 2.2 2 2 0 0 0 0 2 2 2 0 0 1-.4 2.2 2 2 0 0 0-1.4 1.4 2 2 0 0 1-2.2.4 2 2 0 0 0-2 0 2 2 0 0 1-2.2-.4 2 2 0 0 0-1.4-1.4 2 2 0 0 1-.4-2.2 2 2 0 0 0 0-2 2 2 0 0 1 .4-2.2A2 2 0 0 0 7.8 2.8z", certificate: "/certificates/iso.jpg" },
//   { label: "EPFO Registered", d: "M20 7h-9M14 17H5M17 4l3 3-3 3M7 14l-3 3 3 3", certificate: "/certificates/epfo.jpg" },
//   { label: "ESIC Registered", d: "M3 11h18v10H3zM7 11V7a5 5 0 0 1 10 0v4", certificate: "/certificates/esic.jpg" },
// ];

// export default function CertificationsGrid() {
//   const [hovered, setHovered] = useState(null);

//   function handleEnter(cert, e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setHovered({ cert, rect });
//   }

//   function handleLeave() {
//     setHovered(null);
//   }

//   return (
//     <div className="cert-grid reveal" style={{ gap: "3.5rem" }}>
//       {certifications.map((c) => (
//         <div
//           className="cert-card"
//           key={c.label}
//           onMouseEnter={(e) => handleEnter(c, e)}
//           onMouseLeave={handleLeave}
//         >
//           <div className="ci">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d={c.d} />
//             </svg>
//           </div>
//           <span>{c.label}</span>
//         </div>
//       ))}

//       {hovered &&
//         typeof document !== "undefined" &&
//         createPortal(
//           <div
//             className="cert-preview-portal"
//             style={{
//               position: "fixed",
//               left: hovered.rect.left + hovered.rect.width / 2,
//               top: hovered.rect.top - 12,
//               transform: "translate(-50%, -100%)",
//             }}
//           >
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img src={hovered.cert.certificate} alt={`${hovered.cert.label} certificate`} />
//           </div>,
//           document.body
//         )}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { createPortal } from "react-dom";

// const certifications = [
//   { label: "PSARA Licensed", d: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z", certificate: "/certificates/psara.pdf" },
//   { label: "ISO Certified", d: "M9 12l2 2 4-4M7.8 2.8a2 2 0 0 1 2.2-.4 2 2 0 0 0 2 0 2 2 0 0 1 2.2.4 2 2 0 0 0 1.4 1.4 2 2 0 0 1 .4 2.2 2 2 0 0 0 0 2 2 2 0 0 1-.4 2.2 2 2 0 0 0-1.4 1.4 2 2 0 0 1-2.2.4 2 2 0 0 0-2 0 2 2 0 0 1-2.2-.4 2 2 0 0 0-1.4-1.4 2 2 0 0 1-.4-2.2 2 2 0 0 0 0-2 2 2 0 0 1 .4-2.2A2 2 0 0 0 7.8 2.8z", certificate: "/certificates/iso.pdf" },
//   { label: "EPFO Registered", d: "M20 7h-9M14 17H5M17 4l3 3-3 3M7 14l-3 3 3 3", certificate: "/certificates/epfo.pdf" },
//   { label: "ESIC Registered", d: "M3 11h18v10H3zM7 11V7a5 5 0 0 1 10 0v4", certificate: "/certificates/esic.pdf" },
// ];

// export default function CertificationsGrid() {
//   const [hovered, setHovered] = useState(null);

//   function handleEnter(cert, e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setHovered({ cert, rect });
//   }

//   function handleLeave() {
//     setHovered(null);
//   }

//   return (
//     <div className="cert-grid reveal" style={{ gap: "1.5rem" }}>
//       {certifications.map((c) => (
//         <div
//           className="cert-card"
//           key={c.label}
//           onMouseEnter={(e) => handleEnter(c, e)}
//           onMouseLeave={handleLeave}
//         >
//           <div className="ci">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d={c.d} />
//             </svg>
//           </div>
//           <span>{c.label}</span>
//         </div>
//       ))}

//       {hovered &&
//         typeof document !== "undefined" &&
//         createPortal(
//           <div
//             className="cert-preview-portal"
//             style={{
//               position: "fixed",
//               left: hovered.rect.left + hovered.rect.width / 2,
//               top: hovered.rect.top - 12,
//               transform: "translate(-50%, -100%)",
//               width: "280px",
//               height: "360px",
//               boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
//               borderRadius: "8px",
//               overflow: "hidden",
//               background: "#fff",
//             }}
//           >
//             <iframe
//               src={`${hovered.cert.certificate}#toolbar=0&navpanes=0&scrollbar=0`}
//               title={`${hovered.cert.label} certificate`}
//               width="100%"
//               height="100%"
//               style={{ border: "none", pointerEvents: "none" }}
//             />
//           </div>,
//           document.body
//         )}
//     </div>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const certifications = [
  { label: "PSARA Licensed", d: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z", certificate: "/certificates/psara.pdf" },
  { label: "ISO Certified", d: "M9 12l2 2 4-4M7.8 2.8a2 2 0 0 1 2.2-.4 2 2 0 0 0 2 0 2 2 0 0 1 2.2.4 2 2 0 0 0 1.4 1.4 2 2 0 0 1 .4 2.2 2 2 0 0 0 0 2 2 2 0 0 1-.4 2.2 2 2 0 0 0-1.4 1.4 2 2 0 0 1-2.2.4 2 2 0 0 0-2 0 2 2 0 0 1-2.2-.4 2 2 0 0 0-1.4-1.4 2 2 0 0 1-.4-2.2 2 2 0 0 0 0-2 2 2 0 0 1 .4-2.2A2 2 0 0 0 7.8 2.8z", certificate: "/certificates/iso.pdf" },
  { label: "EPFO Registered", d: "M20 7h-9M14 17H5M17 4l3 3-3 3M7 14l-3 3 3 3", certificate: "/certificates/epfo.pdf" },
  { label: "ESIC Registered", d: "M3 11h18v10H3zM7 11V7a5 5 0 0 1 10 0v4", certificate: "/certificates/esic.pdf" },
];

export default function CertificationsGrid() {
  const [hovered, setHovered] = useState(null);   // desktop hover preview
  const [active, setActive] = useState(null);      // mobile tap modal
  const [isMobile, setIsMobile] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // lock background scroll while mobile modal is open
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [active]);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setHovered(null), 150);
  }

  function handleEnter(cert, e) {
    if (isMobile) return;
    clearCloseTimer();
    const rect = e.currentTarget.getBoundingClientRect();
    setHovered({ cert, rect });
  }

  function handleCardClick(cert) {
    if (isMobile) setActive(cert);
  }

  return (
    <div className="cert-grid reveal" style={{ gap: "1.5rem" }}>
      {certifications.map((c) => (
        <div
          className="cert-card"
          key={c.label}
          onMouseEnter={(e) => handleEnter(c, e)}
          onMouseLeave={scheduleClose}
          onClick={() => handleCardClick(c)}
          role={isMobile ? "button" : undefined}
          tabIndex={isMobile ? 0 : undefined}
        >
          <div className="ci">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={c.d} />
            </svg>
          </div>
          <span>{c.label}</span>
        </div>
      ))}

      {/* Desktop hover preview */}
      {!isMobile && hovered &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="cert-preview-portal"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
            style={{
              position: "fixed",
              left: Math.min(
                Math.max(hovered.rect.left + hovered.rect.width / 2, 150),
                window.innerWidth - 150
              ),
              top: hovered.rect.bottom + 12,
              transform: "translateX(-50%)",
              width: "280px",
              height: "360px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff",
              zIndex: 1000,
            }}
          >
            <div style={{ position: "absolute", top: "-12px", left: 0, right: 0, height: "12px" }} />
            <iframe
              src={`${hovered.cert.certificate}#toolbar=0&navpanes=0`}
              title={`${hovered.cert.label} certificate`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              tabIndex={0}
            />
          </div>,
          document.body
        )}

      {/* Mobile tap modal */}
      {isMobile && active &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="cert-preview-backdrop"
            onClick={() => setActive(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10,23,48,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(92vw, 420px)",
                height: "min(80vh, 560px)",
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderBottom: "1px solid rgba(10,23,48,0.1)",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--navy-900, #0a1730)" }}>
                  {active.label}
                </span>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close preview"
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: 20,
                    lineHeight: 1,
                    cursor: "pointer",
                    color: "var(--navy-900, #0a1730)",
                    padding: "4px 8px",
                  }}
                >
                  ×
                </button>
              </div>
              <iframe
                src={`${active.certificate}#toolbar=0&navpanes=0`}
                title={`${active.label} certificate`}
                width="100%"
                height="100%"
                style={{ border: "none", flex: 1 }}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}