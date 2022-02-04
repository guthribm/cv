let date = $("#date");
let menu = $("#menu");
let menuBtn = $("#hamburger");
let menuLinks = $(".menu-link");
let menuLinkButtons = document.querySelectorAll(".menu-link");
let navBar = $("#navbar");
let lastScrollTop = 0;

// Scrolling Navbar Hider Attempt Below
// window.addEventListener("scroll", function () {
//   let scrollTop = window.scrollY || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     navBar.style.top = "-60px";
//     console.log("scrolling down, hiding navbar");
//   } else {
//     navBar.style.top = "0";
//     console.log("NOT scolling, NAVBAR should be visible");
//   }
//   lastScrollTop = scrollTop;
//   console.log("so, did anything happen?");
// });

// Gets current year and displays for copyright
let today = new Date();
date[0].textContent = today.getFullYear();

// console.log(
//   "menu links length: " + menuLinks.length + " links: " + menuLinks[0]
// );

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
