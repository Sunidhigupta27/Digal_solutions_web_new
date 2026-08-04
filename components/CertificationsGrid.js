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

import { useState, useRef } from "react";
import { createPortal } from "react-dom";

const certifications = [
  { label: "PSARA Licensed", d: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z", certificate: "/certificates/psara.pdf" },
  { label: "ISO Certified", d: "M9 12l2 2 4-4M7.8 2.8a2 2 0 0 1 2.2-.4 2 2 0 0 0 2 0 2 2 0 0 1 2.2.4 2 2 0 0 0 1.4 1.4 2 2 0 0 1 .4 2.2 2 2 0 0 0 0 2 2 2 0 0 1-.4 2.2 2 2 0 0 0-1.4 1.4 2 2 0 0 1-2.2.4 2 2 0 0 0-2 0 2 2 0 0 1-2.2-.4 2 2 0 0 0-1.4-1.4 2 2 0 0 1-.4-2.2 2 2 0 0 0 0-2 2 2 0 0 1 .4-2.2A2 2 0 0 0 7.8 2.8z", certificate: "/certificates/iso.pdf" },
  { label: "EPFO Registered", d: "M20 7h-9M14 17H5M17 4l3 3-3 3M7 14l-3 3 3 3", certificate: "/certificates/epfo.pdf" },
  { label: "ESIC Registered", d: "M3 11h18v10H3zM7 11V7a5 5 0 0 1 10 0v4", certificate: "/certificates/esic.pdf" },
];

export default function CertificationsGrid() {
  const [hovered, setHovered] = useState(null);
  const closeTimer = useRef(null);

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
    clearCloseTimer();
    const rect = e.currentTarget.getBoundingClientRect();
    setHovered({ cert, rect });
  }

  return (
    <div className="cert-grid reveal" style={{ gap: "1.5rem" }}>
      {certifications.map((c) => (
        <div
          className="cert-card"
          key={c.label}
          onMouseEnter={(e) => handleEnter(c, e)}
          onMouseLeave={scheduleClose}
        >
          <div className="ci">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={c.d} />
            </svg>
          </div>
          <span>{c.label}</span>
        </div>
      ))}

      {hovered &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="cert-preview-portal"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
            style={{
              position: "fixed",
              left: hovered.rect.left + hovered.rect.width / 2,
              top: hovered.rect.bottom + 12,
              transform: "translateX(-50%)",
              width: "280px",
              height: "360px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {/* invisible bridge so the mouse can travel from the card to the preview without a gap triggering close */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: 0,
                right: 0,
                height: "12px",
              }}
            />
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
    </div>
  );
}