let date = $("#date");
let menu = $("#menu");
let menuBtn = $("#hamburger");
let menuLinks = $(".menu-link");
let menuLinkButtons = document.querySelectorAll(".menu-link");
let wrapper = document.querySelector(".wrapper");
let navBar = document.getElementById("navbar");

// Scrolling Navbar Hider Attempt Below

// Gets current year and displays for copyright
let today = new Date();
date[0].textContent = today.getFullYear();

// Adds event listener that closes menu when link is clicked
menuLinkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(() => {
      console.log("waiting to play button animation");
      menu.toggleClass("invisible");
    }, 300);
    console.log("animation complete, menu turning invisible");
  });
});

function menuHandler() {
  menu.toggleClass("invisible");
}

menuBtn.on("click", menuHandler);

$(".wrapper").on("click", () => {
  console.log("window was clicked");
  menu.removeClass("invisible");
});

// Intersection Observer for About Me Text
const sections = document.querySelectorAll(".fade-in");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fade-in", entry.isIntersecting);
    // if (entry.isIntersecting) {
    //   observer.unobserve(entry.target);
    // }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Intersection Observer for About Me Text
const skillsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -175px 0px",
};
const skills = document.querySelectorAll(".icon-container");
const skillsObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("icon-change");
  });
}, skillsOptions);

skills.forEach((skill) => {
  skillsObserver.observe(skill);
});
