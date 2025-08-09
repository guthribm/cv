import React from "react";

// Skill data
const skills = [
  { name: "React", icon: <i className="fab fa-react" />, color: "#61dafb" },
  { name: "JavaScript", icon: <i className="fab fa-js" />, color: "#f7df1e" },
  { name: "HTML5", icon: <i className="fab fa-html5" />, color: "#e34c26" },
  { name: "CSS3", icon: <i className="fab fa-css3-alt" />, color: "#2965f1" },
  {
    name: "Material UI",
    icon: <i className="fab fa-uikit" />,
    color: "#007fff",
  },
  { name: "C#", icon: <i className="fas fa-code" />, color: "#9b4f96" },
  { name: ".NET", icon: <i className="fas fa-server" />, color: "#512bd4" },
  {
    name: "JQuery",
    icon: (
      <img
        src="/cv-react/images/skill-jquery-png.png"
        alt="jQuery"
        style={{ width: 32, height: 32 }}
      />
    ),
    color: "#0769ad",
  },
  { name: "Git", icon: <i className="fab fa-git-alt" />, color: "#f34f29" },
  { name: "Node.js", icon: <i className="fab fa-node-js" />, color: "#68a063" },
  {
    name: "Vite",
    icon: <img src="/vite.svg" alt="Vite" style={{ width: 32, height: 32 }} />,
    color: "#646cff",
  },
];

export default function Skills() {
  return (
    <section
      className="skills-section"
      style={{
        position: "relative",
        minHeight: "80vh",
        padding: "60px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(120deg, #0d1b2a 0%, #274472 100%)",
      }}
    >
      <h2
        className="skills-title"
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          margin: "2rem 0 3rem 0",
          background: "linear-gradient(90deg, #61dafb 0%, #007fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 1,
        }}
      >
        Skills and Technologies
      </h2>
      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{
              background: `linear-gradient(135deg, ${skill.color}22 0%, #222 100%)`,
              borderRadius: "1.5rem",
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
              border: `2px solid ${skill.color}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 1rem 1rem 1rem",
              color: skill.color,
              fontWeight: 700,
              fontSize: "1.1rem",
              position: "relative",
              cursor: "pointer",
              transition:
                "transform 0.3s cubic-bezier(.25,1,.5,1), box-shadow 0.3s",
              overflow: "hidden",
              zIndex: 2,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08) rotate(-2deg)";
              e.currentTarget.style.boxShadow = `0 8px 32px 0 ${skill.color}55`;
              e.currentTarget.style.background = `linear-gradient(120deg, ${skill.color}55 0%, #222 100%)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(0,0,0,0.12)";
              e.currentTarget.style.background = `linear-gradient(135deg, ${skill.color}22 0%, #222 100%)`;
            }}
          >
            <span
              className="skill-icon"
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                filter: "drop-shadow(0 2px 8px #000)",
              }}
            >
              {skill.icon}
            </span>
            <span
              className="skill-name"
              style={{
                color: "#fff",
                textShadow: `0 2px 8px ${skill.color}`,
                fontWeight: 800,
                fontSize: "1.2rem",
                letterSpacing: "0.03em",
              }}
            >
              {skill.name}
            </span>
            <div
              className="skill-anim-bg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
                background: `radial-gradient(circle at 60% 40%, ${skill.color}33 0%, transparent 70%)`,
                opacity: 0.7,
                transition: "opacity 0.3s",
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
