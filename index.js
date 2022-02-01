let date = document.getElementById("date");

let body = document.body;
body.addEventListener("scroll", function (event) {
  console.log(`something happened. window.scrollY: ${document.window.scrollY}`);
});

let today = new Date();
date.textContent = today.getFullYear();

// const sections = document.querySelectorAll(".invisible");
// const options = {
//   root: null,
//   threshold: 0,
//   rootMargin: "0px 0px -125px 0px",
// };
// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     entry.target.classList.toggle("fade-in");
//   });
// }, options);

// sections.forEach((section) => {
//   observer.observe(section);
// });
