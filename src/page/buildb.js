import React from "react";

// Systems images
import hrmsImage from "../assets/hrms.png";
import lmsImage from "../assets/relms.png";
import itsmImage from "../assets/itsm.png";
import tassImage from "../assets/tass.png";
import fmvsImage from "../assets/fmvs.png";
import complaintsImage from "../assets/c6.png";
import portalImage from "../assets/m7.png";
import cshImage from "../assets/csh.png";
import dashboardImage from "../assets/dash.png";
import qrImage from "../assets/qr.png";

const systems = [
  {
    image: hrmsImage,
    title: "Human Resources Management System",
    description: `The Human Resources Management System (HRMS) manages the Ministry of Revenue’s employee lifecycle, maintaining detailed profiles and supporting HR functions like recruitment, promotions, transfers, training, and performance management.`,
    coverage: "Ministry H.Q and all Tax Centers",
    technology: "Secure, internal web-based system",
  },
  {
    image: lmsImage,
    title: "Letter Management System (LMS)",
    description: `Automates the registration, tracking, and archiving of all official correspondence, improving efficiency and transparency.`,
    coverage: "Ministry H.Q and all Tax Centers",
    technology: "Secure, web-based platform",
  },
  {
    image: itsmImage,
    title: "IT Service Management",
    description:`Tracks and resolves IT service requests, ensuring faster response and improved IT service quality.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Web-based, secure IT service platform",
  },
  {
    image: tassImage,
    title: "Tax Administration Support System (TASS)",
    description: `Helps taxpayers declare sales and purchases, provides MRC/TIN verification, and supports partner institutions.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Internal system connected via VPN",
  },
  {
    image: fmvsImage,
    title: "Fair Market Value System (FMVS)",
    description: `Tracks market values by date, segment, and category, supporting consistent pricing and transparent monitoring.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Secure, web-based application",
  },
  {
    image: complaintsImage,
    title: "MoR Complaints Portal",
    description: `Enables taxpayers to file and track complaints, ensuring accountability and timely resolution.`,
    coverage: "Ministry H.Q and all Tax Centers",
    technology: "Secure, web-based system",
  },
  {
    image: portalImage,
    title: "MoR Portal",
    description: `Provides taxpayers with news, directives, legislation, and reports, serving as a central hub to enhance transparency.`,
    coverage: "Nationwide, accessible to all taxpayers",
    technology: "Web-based, publicly accessible portal",
  },
  {
    image: cshImage,
    title: "Fiscal Device (FD) System",
    description: `Registers and encodes Cash Register Machines, ensuring secure sales data and compliance.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Internal system connected through VPN",
  },
  {
    image: dashboardImage,
    title: "MoR Revenue Dashboard",
    description: `Centralizes real-time revenue data from tax centers, enabling monitoring, trend analysis, and informed decisions.`,
    coverage: "Ministry H.Q, Federal and Regional Tax Centers",
    technology: "Secure, web-based analytics platform",
  },
  {
    image: qrImage,
    title: "Manual Receipt Tracking & QR Code System",
    description: `Lets tax centers register and track receipts using QR codes to ensure authenticity and transparency.`,
    coverage: "All Federal and Regional Tax Centers",
    technology: "Internal system connected via VPN",
  },
];

function Page() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "15px", backgroundColor: "#f5f6fa" }}>
      {/* <h2 style={{ textAlign: "center", color: "#075cb7", marginBottom: "20px" }}>
        Ministry of Revenue Systems
      </h2> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {systems.map((system, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              borderRadius: "15px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              height: "280px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={system.image}
              alt={system.title}
              style={{
                width: "100%",
                height: "80px",
                objectFit: "contain",
                marginBottom: "8px",
              }}
            />
            <h3
              style={{
                color: "#075cb7",
                fontSize: "13px",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {system.title}
            </h3>
            <div
              style={{
                fontSize: "13px",
                textAlign: "justify",
                overflowY: "auto",
                flex: 1,
                marginBottom: "1px",
              }}
            >
              {system.description}
            </div>
            <p style={{ fontSize: "11px", margin: "2px 0" }}>
              <strong>Coverage:</strong> {system.coverage}
            </p>
            <p style={{ fontSize: "11px", margin: "2px 0" }}>
              <strong>Technology:</strong> {system.technology}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
