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
];

function CarouselSlider() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const speed = 0.3; // adjust slow/faster
  const slideWidth = 50; // Each slide takes 50% of the container

  useEffect(() => {
    if (isPaused) return;
    let animationFrame;

    const animate = () => {
      setOffset((prev) => (prev + speed) % (slides.length * slideWidth));
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
        ref={sliderRef}
        style={{
          display: "flex",
          width: `${slides.length * 2 * 50}%`,
          transform: `translateX(-${offset}%)`,
          transition: "transform 1.1s linear",
        }}
      >
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${slideWidth}%`,
              margin: "6 5px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image container */}
            <div
              style={{
                width: "100%",
                height: "450px",
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
                  maxWidth: "900%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* Text below image */}
            <div
              style={{
                padding: "0px",
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
