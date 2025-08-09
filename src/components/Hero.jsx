import React, { useState, useEffect } from "react";

// Cloud SVG Component
const CloudSVG = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 200 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="cloud-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow
          dx="2"
          dy="4"
          stdDeviation="3"
          floodColor="rgba(0,0,0,0.3)"
        />
      </filter>
    </defs>
    <path
      d="M50 60 
         C30 60, 20 40, 40 30
         C40 20, 60 15, 70 25
         C80 10, 110 10, 120 25
         C140 15, 160 25, 150 40
         C170 40, 180 60, 160 70
         L50 70 Z"
      fill="rgba(255, 255, 255, 0.8)"
      filter="url(#cloud-shadow)"
    />
  </svg>
);

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="accent-bg">
      <div id="sun"></div>

      {/* Animated Clouds */}
      <CloudSVG
        className="cloud cloud-1"
        style={{
          position: "absolute",
          top: "15%",
          left: `${10 + scrollY * 0.1}%`,
          width: "240px",
          height: "144px",
          zIndex: 2,
          transition: "left 0.1s ease-out",
        }}
      />

      <CloudSVG
        className="cloud cloud-2"
        style={{
          position: "absolute",
          top: "25%",
          left: `${70 + scrollY * 0.15}%`,
          width: "160px",
          height: "96px",
          zIndex: 2,
          transition: "left 0.1s ease-out",
          opacity: 0.7,
        }}
      />

      <CloudSVG
        className="cloud cloud-3"
        style={{
          position: "absolute",
          top: "35%",
          left: `${-10 + scrollY * 0.08}%`,
          width: "200px",
          height: "120px",
          zIndex: 2,
          transition: "left 0.1s ease-out",
          opacity: 0.6,
        }}
      />

      <CloudSVG
        className="cloud cloud-4"
        style={{
          position: "absolute",
          top: "45%",
          left: `${85 + scrollY * 0.12}%`,
          width: "90px",
          height: "54px",
          zIndex: 2,
          transition: "left 0.1s ease-out",
          opacity: 0.5,
        }}
      />

      <img
        src="/cv-react/images/geometric_mountains_png.png"
        alt="snowy mountains"
        className="background"
      />
      <img
        src="/cv-react/images/Halloween-silhouette-forest_png.png"
        alt="forest silhouette"
        className="foreground tree"
      />
      <div className="hero__title_container">
        <h1 className="title">
          Hi, I'm{" "}
          <span>
            <strong>Brandon</strong>
          </span>
        </h1>
        <hr />
        <h2 className="subtitle">a software developer</h2>
      </div>
    </header>
  );
}
