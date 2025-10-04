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
  h1Image, l2Image, i3Image, t4Image, f5Image,
  c6Image, m7Image, c8Image, d9Image, q10Image
];

export default function FullScreenVerticalSlider() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 0.5; // scrolling speed in px per frame
  const containerRef = useRef(null);

  // Slide height as percentage of viewport (responsive)
  const SLIDE_HEIGHT = 50; // in vh
  const SLIDE_GAP = 20;    // gap between slides in px

  useEffect(() => {
    if (isPaused) return;

    let animationFrame;

    const animate = () => {
      setOffset(prev => (prev + speed) % (slides.length * (window.innerHeight * (SLIDE_HEIGHT / 100) + SLIDE_GAP)));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#084c70",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Blue overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(12, 64, 96, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Slider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          transform: `translateY(-${offset}px)`,
          transition: isPaused ? "transform 0.1s ease-out" : "none",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {[...slides, ...slides].map((img, index) => (
          <div
            key={index}
            style={{
              width: "60%",              // slide width relative to container
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              backgroundColor: "rgba(241, 245, 247, 0.6)",
            }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // show full image
                transition: "transform .3s ease",
                transform: isPaused ? "scale(1.08)" : "scale(1)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
