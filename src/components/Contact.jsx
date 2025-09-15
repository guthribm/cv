import React from "react";

export default function Contact() {
  return (
    <>
      <div className="link-target" id="contact-target"></div>
      <section id="contact" className="contact-me-section accent-bg">
        <h2 className="heading contact-heading">Contact Me</h2>
        <p>
          I'm a full-stack developer with 3+ years of experience in React, C#,
          and modern web technologies. Whether you're looking for someone to
          join your team or want to discuss a project, I'd love to hear from
          you!
        </p>
        <form action="https://formsubmit.co/guthribm@gmail.com" method="POST">
          <label htmlFor="name"></label>
          <input
            id="name"
            className="contact-form"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <label htmlFor="email"></label>
          <input
            id="email"
            className="contact-form"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <label htmlFor="message"></label>
          <textarea
            id="message"
            placeholder="Your Message 📧"
            className="contact-form"
            name="message"
            rows={6}
            cols={50}
            required
          ></textarea>
          <input type="hidden" name="_subject" value="Portfolio Email!" />
          <input
            type="hidden"
            name="_next"
            value="https://guthribm.github.io/cv/"
          />
          <button className="btn form-submit" type="submit">
            Send
          </button>
        </form>
      </section>
    </>
  );
}
