import React from "react";

export default function Menu({ visible, onMenuLinkClick }) {
  return (
    <div id="menu" className={`menu${visible ? " invisible" : ""}`}>
      <ul className="menu-list">
        <li>
          <a className="menu-link slide" href="#home" onClick={onMenuLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a
            className="menu-link slide"
            href="#about"
            onClick={onMenuLinkClick}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="menu-link slide"
            href="#skills"
            onClick={onMenuLinkClick}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="menu-link slide"
            href="#projects"
            onClick={onMenuLinkClick}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="menu-link slide"
            href="#contact"
            onClick={onMenuLinkClick}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className="menu-link slide"
            href="#footer"
            onClick={onMenuLinkClick}
          >
            Social Media
          </a>
        </li>
      </ul>
    </div>
  );
}
