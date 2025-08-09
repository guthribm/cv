import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="contacts-container">
        <a
          href="https://www.linkedin.com/in/guthribm/"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin contact-icon"></i>
          linkedin.com/in/guthribm/
        </a>
        <a
          href="https://github.com/guthribm"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github contact-icon"></i>github.com/guthribm
        </a>
        <a
          href="mailto:guthribm@gmail.com"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="far fa-envelope-open contact-icon"></i>
          guthribm@gmail.com
        </a>
      </div>
      <div className="attribution">
        Coded with 💛 by Brandon Guthrie © {currentYear}
      </div>
    </footer>
  );
}
