import React, { useState, useEffect, useRef } from "react";

// Slider images
import h1Image from "../assets/h1.png";
import l2Image from "../assets/l2.png";
import i3Image from "../assets/i3.png";
import t4Image from "../assets/t4.png";
import f5Image from "../assets/f5.png";
import c6Image from "../assets/c6.png";
import m7Image from "../assets/m7.png";
import c8Image from "../assets/c8.png";
import d9Image from "../assets/d9.png";
import q10Image from "../assets/q10.png";
import mb11Image from "../assets/mb11.png";

const slides = [
  { image: h1Image, title: "HRMS" },
  { image: l2Image, title: "LMS" },
  { image: i3Image, title: "ITSM" },
  { image: t4Image, title: "TASS" },
  { image: f5Image, title: "FMVS" },
  { image: c6Image, title: "Complaints Portal" },
  { image: m7Image, title: "MoR Portal" },
  { image: c8Image, title: "Fiscal Device" },
  { image: d9Image, title: "MoR Revenue Dashboard" },
  { image: q10Image, title: "Manual Receipt Tracking & QR" },
  { image: mb11Image, title: "Mobile Application For Lottery Apply" },
];

function CarouselSlider() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 0.08; // speed control
  const slideWidth = 50; // % per slide

  useEffect(() => {
    if (isPaused) return;

    let animationFrame;

    const animate = () => {
      setOffset((prev) => {
        const totalWidth = slides.length * slideWidth;
        if (prev >= totalWidth) {
          return 0; // reset seamlessly
        }
        return prev + speed;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        overflow: "hidden",
        position: "relative",
        background: "#23bbf7ff",
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        style={{
          display: "flex",
          width: `${slides.length * 1 * slideWidth}%`,
          transform: `translateX(-${offset}%)`,
        }}
      >
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${slideWidth}%`,
              margin: "6px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                height: "470px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#e0e0e0",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* Title */}
            <div
              style={{
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#f81414ff",
              }}
            >
              {slide.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselSlider;
