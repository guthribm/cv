import React from "react";

export default function About() {
  return (
    <>
      <div className="link-target" id="about-target"></div>
      <section id="about">
        <img
          id="profile-img"
          src="/cv/images/dog_whisper.jpg"
          alt="me holding a sleeping doggo"
        />
        <h2 className="heading" fontStyle="italic">
          That's me on the left.
        </h2>
        <hr />
        <p className="fade-in">
          I love coding about as much as my buddy Scout loves sleeping. And he{" "}
          <em>really</em> likes to sleep! 😃
        </p>
        <p className="fade-in">
          I am a full-stack developer with 3+ years of professional experience
          building modern web applications using React, TypeScript, Material-UI,
          C#, ASP.NET, and MongoDB.
        </p>
        <p className="fade-in">
          I've spent the majority of my time leading the conversion of a
          large-scale healthcare provider application from Angular to React,
          where I designed and implemented patient care plan interfaces, built
          onboarding APIs, and created intuitive UI components for clinical
          workflows.
        </p>
        <p className="fade-in">
          My experience spans various technologies and project types - from
          Chrome CRM extensions and Next.js applications to backend services
          using AdonisJS. I'm passionate about creating clean, maintainable code
          and user-centered designs.
        </p>
        <p className="fade-in">
          I'm always eager to tackle new challenges and contribute to innovative
          projects that make a meaningful impact.
        </p>
        <a
          id="resume-btn"
          className="resume-wrapper btn"
          href="/cv/images/Brandon_Guthrie_Resume_2025.pdf"
          download
        >
          Download Resume
        </a>
      </section>
    </>
  );
}
