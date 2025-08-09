import React from "react";

export default function Navbar({ onHamburgerClick }) {
  return (
    <nav className="bar" id="navbar">
      <a className="logo" href="https://guthribm.github.io/cv/">
        BG
      </a>
      <div id="hamburger" onClick={onHamburgerClick}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}
