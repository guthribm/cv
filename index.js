let date = $("#date");
let menu = $("#menu");
let menuBtn = $("#hamburger");
let menuLinks = $(".menu-link");
let navBar = $("#navbar");

// let body = document.body;
// body.addEventListener("scroll", function (event) {
//   console.log(`something happened. window.scrollY: ${document.window.scrollY}`);
// });

// Gets current year and displays for copyright
let today = new Date();
date[0].textContent = today.getFullYear();

console.log(
  "menu links length: " + menuLinks.length + " links: " + menuLinks[0]
);

let menuLinkButtons = document.querySelectorAll(".menu-link");

menuLinkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    menu.toggleClass("invisible");
  });
});

function menuHandler() {
  menu.toggleClass("invisible");
}

menuBtn.on("click", menuHandler);

$(".wrapper").on("click", () => {
  console.log("window was clicked");
  menu.addClass("invisible");
});

// Intersection Observer for About Me Text
const sections = document.querySelectorAll(".fade-in");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fade-in");
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Intersection Observer for About Me Text
const skillsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
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
