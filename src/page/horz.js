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

// Background image
import doorImage from "../assets/door.png";

const slides = [
  h1Image, l2Image, i3Image, t4Image, f5Image,
  c6Image, m7Image, c8Image, d9Image, q10Image
];

export default function FullScreenVerticalSlider() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const speed = 0.5; // scrolling speed

  // Each slide takes 90% of viewport height
  const slideHeight = window.innerHeight * 0.9;

  useEffect(() => {
    if (isPaused) return;
    let animationFrame;

    const animate = () => {
      setOffset((prev) => (prev + speed) % (slides.length * slideHeight));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, slideHeight]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0c4060", // Blue background
        backgroundImage: `url(${doorImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Blue overlay on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(12, 64, 96, 0.5)", // semi-transparent blue
          opacity: isPaused ? 0.6 : 0.3,
          transition: "all 0.6s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Main slider */}
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          flexDirection: "column",
          transform: `translateY(-${offset}px)`,
          transition: isPaused ? "transform 0.1s ease-out" : "none",
          zIndex: 2,
        }}
      >
        {[...slides, ...slides].map((img, index) => (
          <div
            key={index}
            style={{
              height: `${slideHeight}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px 0",
              padding: "0 10px",
            }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "90%",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                transform: isPaused ? "scale(1.02)" : "scale(1)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
