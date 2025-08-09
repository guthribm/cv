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
        <h2 className="heading">That's me on the left.</h2>
        <hr />
        <p className="fade-in">
          I love coding about as much as my buddy Scout loves sleeping. And he{" "}
          <em>really</em> likes to sleep! 😃
        </p>
        <p className="fade-in">
          I am a self-taught programmer that enjoys creating beautiful web pages
          and apps written in Semantic HTML5 and responsive CSS3.
        </p>
        <p className="fade-in">
          While the first (and probably my favorite) programming language that I
          learned was Python at the beginning of 2021, I spend most of my time
          now writing in JavaScript ES6.
        </p>
        <p className="fade-in">
          I am currently looking to join a team that will help mentor an
          inquisitive problem-solver with a desire to learn.
        </p>
        <a
          id="resume-btn"
          className="resume-wrapper btn"
          href="/cv/images/Brandon_Guthrie_Developer_2023_Resume.pdf"
          download
        >
          Download Resume
        </a>
      </section>
    </>
  );
}
