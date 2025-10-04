import React, { useState, useEffect } from "react";

// Slider images
import h1Image from "../assets/h1.png";
import l2Image from "../assets/l2.png";

// Systems images
import hrmsImage from "../assets/hrms.png";
import lmsImage from "../assets/relms.png";
import itsmImage from "../assets/itsm.png";
import tassImage from "../assets/tass.png";
import fmvsImage from "../assets/fmvs.png";
import complaintsImage from "../assets/complaints.png";
import portalImage from "../assets/portal.png";
import fdImage from "../assets/fd.png";
import dashboardImage from "../assets/dashboard.png";
import qrImage from "../assets/qr.png";

// Slider data
const slides = [
  { image: h1Image, title: "Human Resources Management System (HRMS)" },
  { image: l2Image, title: "Letter Management System (LMS)" },
  // Add more slider images here if needed
];

// Systems data
const systems = [
  {
    image: hrmsImage,
    title: "Human Resources Management System (HRMS)",
    description: `The Human Resources Management System (HRMS) is designed to manage the
      Ministry of Revenue’s employee lifecycle and administrative functions.
      It maintains detailed employee profiles, covering personal information,
      job history, qualifications, and organizational assignments.`,
    coverage: "Ministry Headquarters and all Tax Centers",
    technology: "Secure, internal web-based system",
  },
  {
    image: lmsImage,
    title: "Letter Management System (LMS)",
    description: `The Letter Management System (LMS) automates the handling of all official
      correspondence within the Ministry of Revenue. It manages incoming and outgoing
      letters, ensuring proper registration, tracking, and archiving of documents.`,
    coverage: "Ministry Headquarters and all Tax Centers",
    technology: "Secure, web-based platform",
  },
  {
    image: itsmImage,
    title: "Information Technology Service Management (ITSM)",
    description: `The Information Technology Service Management System (ITSM) is a ticket-based
      platform that enables the Ministry to manage IT service requests effectively.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Web-based, secure IT service platform",
  },
  {
    image: tassImage,
    title: "Tax Administration Support System (TASS)",
    description: `The Tax Administration Support System (TASS) provides a wide range of services
      to taxpayers and partner institutions, including MRC verification and TIN validation.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Internal system connected via a secure VPN",
  },
  {
    image: fmvsImage,
    title: "Fair Market Value System (FMVS)",
    description: `The Fair Market Value System (FMVS) is used for registering and monitoring
      market values based on transaction dates, market segments, and product categories.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Secure, web-based application",
  },
  {
    image: complaintsImage,
    title: "MoR Complaints Portal",
    description: `The MoR Complaints Portal allows taxpayers and stakeholders to file complaints,
      which are logged, tracked, and monitored by the Ministry’s Complaints Team.`,
    coverage: "Ministry Headquarters and all Tax Centers",
    technology: "Secure, web-based system",
  },
  {
    image: portalImage,
    title: "MoR Portal",
    description: `The Ministry of Revenue Portal serves as the official communication platform
      between the Ministry and taxpayers, providing news, directives, and legislation.`,
    coverage: "Nationwide, accessible to all taxpayers",
    technology: "Web-based, publicly accessible portal",
  },
  {
    image: fdImage,
    title: "Fiscal Device (FD) System",
    description: `The Fiscal Device (FD) System manages the fiscalization of Cash Register Machines
      used by taxpayers, ensuring sales data is validated, secure, and compliant.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Internal secure system connected through VPN",
  },
  {
    image: dashboardImage,
    title: "MoR Revenue Dashboard",
    description: `The MoR Revenue Dashboard displays the Ministry’s revenue collection performance
      in real-time, helping leadership track trends and make informed policy decisions.`,
    coverage: "Ministry Headquarters, Federal and Regional Tax Centers",
    technology: "Secure, web-based analytics platform",
  },
  {
    image: qrImage,
    title: "Manual Receipt Tracking and QR Code System",
    description: `The Manual Receipt Tracking and QR Code System strengthens transparency
      in manual receipt management, including QR code validation to verify receipts.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Internal system securely connected through VPN",
  },
];

// Slider component
function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "10px",
        marginBottom: "40px",
        height: "400px",
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            display: index === current ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            position: "relative",
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // ✅ full image visible
            }}
          />
          <h2
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "#fff",
              background: "rgba(0,0,0,0.5)",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            {slide.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

// Main Page component
function Page() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Top Slider */}
      <Slider />

      {/* Systems Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
        }}
      >
        {systems.map((system, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "15px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div>
              <img
                src={system.image}
                alt={system.title}
                style={{ width: "120px", height: "auto", borderRadius: "8px" }}
              />
            </div>
            <div>
              <h3 style={{ color: "#075cb7", marginBottom: "10px" }}>{system.title}</h3>
              <p style={{ fontSize: "14px", color: "#333", marginBottom: "10px" }}>{system.description}</p>
              {system.coverage && (
                <p style={{ fontSize: "14px", color: "#444" }}>
                  <strong>Coverage:</strong> {system.coverage}
                </p>
              )}
              {system.technology && (
                <p style={{ fontSize: "14px", color: "#444" }}>
                  <strong>Technology:</strong> {system.technology}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
