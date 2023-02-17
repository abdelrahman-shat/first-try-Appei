// make cerrunt year:
const CopyYear = document.querySelector(".copyright-year");
const thisyear = new Date().getFullYear();
CopyYear.textContent = thisyear;

// make mobile nav works:
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("open-nav");
});

// stick nav
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// make scroll smooth:
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top;
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //scroll other sections;
    if (href !== "#" && href.startsWith("#")) {
      const sectionPlace = document.querySelector(href);
      console.log(sectionPlace);
      sectionPlace.scrollIntoView({
        behavior: "smooth",
      });
    }
    //close mobile nav;
    if (link.classList.contains("upper-nav-link"))
      headerEL.classList.remove("open-nav");
  });
});

// document.body.classList.remove("sticky");

/* <div class="switch-parice-time">
  <button class="time-option chosen-time-option">Monthly</button>
  <button class="time-option time-option-color">Yearly</button>
  </div> */

// make switch-parice-time:
// section-pricing
const priceContianer = document.querySelector(".section-pricing");
const priceModeBtn = document.querySelector(".switch-parice-time");
const priceModes = document.querySelectorAll(".time-option");
const Zeros = document.querySelectorAll(".zero-year");
const periods = document.querySelectorAll(".per-month");

priceModeBtn.addEventListener("click", function () {
  priceContianer.classList.toggle("month-mode");
  priceContianer.classList.toggle("year-mode");

  priceModes.forEach(function (modebtn) {
    modebtn.classList.toggle("chosen-time-option");
    modebtn.classList.toggle("time-option-color");
  });
  if (priceContianer.classList.contains("year-mode")) {
    Zeros.forEach(function (zero) {
      zero.textContent = "0";
    });
    periods.forEach(function (period) {
      period.textContent = "/year";
    });
  }
  if (priceContianer.classList.contains("month-mode")) {
    Zeros.forEach(function (zero) {
      zero.textContent = "";
    });
    periods.forEach(function (period) {
      period.textContent = "/month";
    });
  }
});
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

// }
