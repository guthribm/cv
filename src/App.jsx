import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  console.log("App.js loading");
  const [menuVisible, setMenuVisible] = useState(false);

  // Handle hamburger click
  const handleHamburgerClick = () => {
    setMenuVisible((v) => !v);
  };

  // Handle menu link click
  const handleMenuLinkClick = () => {
    setTimeout(() => {
      setMenuVisible(false);
    }, 300);
  };

  // Intersection Observer for fade-in sections
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -150px 0px",
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("fade-in", entry.isIntersecting);
      });
    }, options);
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for skills icons
  useEffect(() => {
    const skills = document.querySelectorAll(".icon-container");
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -175px 0px",
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("icon-change", entry.isIntersecting);
      });
    }, options);
    skills.forEach((skill) => observer.observe(skill));
    return () => observer.disconnect();
  }, []);

  // Set copyright year in footer
  useEffect(() => {
    const dateSpan = document.getElementById("date");
    if (dateSpan) {
      dateSpan.textContent = new Date().getFullYear();
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleWrapperClick = (e) => {
      if (menuVisible && e.target.classList.contains("wrapper")) {
        setMenuVisible(false);
      }
    };
    document
      .querySelector(".wrapper")
      ?.addEventListener("click", handleWrapperClick);
    return () => {
      document
        .querySelector(".wrapper")
        ?.removeEventListener("click", handleWrapperClick);
    };
  }, [menuVisible]);

  console.log("App.jsx is rendering");

  return (
    <div className="wrapper">
      <Navbar onHamburgerClick={handleHamburgerClick} />
      <Menu visible={menuVisible} onMenuLinkClick={handleMenuLinkClick} />
      <div className="link-target" id="home"></div>
      <Hero />
      <div className="link-target" id="about-target"></div>
      <About />
      <div className="link-target" id="skills-target"></div>
      <Skills />
      <div className="link-target" id="projects-target"></div>
      <Projects />
      <div className="link-target" id="contact-target"></div>
      <Contact />
      <div className="link-target" id="footer-target"></div>
      <Footer />
    </div>
  );
}

export default App;
