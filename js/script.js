/*
 * Nav Section
 */

// Toggles ham menu

const hamMenu = document.querySelector(".hamburger-menu"); // Target

const toggleHamburgerMenu = () => {
  const hamTopBun = document.querySelector(".ham-top-bun");
  const hamMiddle = document.querySelector(".ham-middle");
  const hamBottomBun = document.querySelector(".ham-bottom-bun");
  const mobileNav = document.querySelector("#nav-links-mobile");
  const hamButton = document.querySelector(".hamburger-menu");

  // Toggles css class to apply transition effect
  hamTopBun.classList.toggle("ham-top-expanded");
  hamMiddle.classList.toggle("slide-left");
  hamBottomBun.classList.toggle("ham-bottom-expanded");

  // Toggles mobile nav on click
  mobileNav.classList.toggle("active");

  // Toggles aria attribute on button
  hamButton.getAttribute("aria-expanded") === "true"
    ? hamButton.setAttribute("aria-expanded", "false")
    : hamButton.setAttribute("aria-expanded", "true");
};

hamMenu.addEventListener("click", toggleHamburgerMenu);

// To hide mobile nav menu on selection
const mobileAbout = document.querySelector("#about-m");
const mobileProjects = document.querySelector("#projects-m");
const mobileContact = document.querySelector("#contact-m");

mobileAbout.addEventListener("click", toggleHamburgerMenu);
mobileProjects.addEventListener("click", toggleHamburgerMenu);
mobileContact.addEventListener("click", toggleHamburgerMenu);

// Hides mobile nav when width passes 825px threshold
const resetNav = () => {
  const mobileNav = document.querySelector("#nav-links-mobile");
  const hamTopBun = document.querySelector(".ham-top-bun");
  const hamMiddle = document.querySelector(".ham-middle");
  const hamBottomBun = document.querySelector(".ham-bottom-bun");
  if (window.innerWidth >= 825) {
    mobileNav.classList.remove("active");
    hamTopBun.classList.remove("ham-top-expanded");
    hamMiddle.classList.remove("slide-left");
    hamBottomBun.classList.remove("ham-bottom-expanded");
  }
};

window.addEventListener("resize", resetNav);

/*
 * About me section
 */

// Adds functionality to the "about" button to show/hide text
const aboutMeSection = document.getElementById("about-text");
const aboutButton = document.getElementById("about-me-button");
const aboutMeClosed = document.getElementById("about-me-button-close");
const mainNavAbout = document.querySelector(".nav-about-link");
const mobileNavAbout = document.getElementById("about-m");
const aboutCard = document.getElementById("about-card");

const aboutButtonToggle = () => {
  // To toggle "about me" text
  if (aboutMeSection.className === "inactive" && window.innerWidth > 1175) {
    aboutMeSection.className = "active unhidden-large";
  } else if (
    aboutMeSection.className === "inactive" &&
    window.innerWidth <= 1175
  ) {
    aboutMeSection.className = "active unhidden-small";
  } else {
    aboutMeSection.className = "inactive";
  }
  aboutMeClosed.className === "inactive"
    ? (aboutMeClosed.className = "")
    : (aboutMeClosed.className = "inactive");
  aboutCard.className === ""
    ? (aboutCard.className = "about-card-minimal")
    : (aboutCard.className = "");
};

aboutButton.addEventListener("click", aboutButtonToggle);
mainNavAbout.addEventListener("click", aboutButtonToggle);
mobileNavAbout.addEventListener("click", aboutButtonToggle);
aboutMeClosed.addEventListener("click", aboutButtonToggle);

/* 
* Project carousel 
*/

// Targets
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

// Variables needing updated on each project change
const projectDisplay = document.getElementById("project-display");
const projectSummaryText = document.getElementById("project-summary-text");
const githubButton = document.getElementById("project-github-button");
const liveButton = document.getElementById("project-live-button");

// Arrays for project data
const projectSites = [
  "https://m-colen.github.io/zen-coffee/",
  "https://m-colen.github.io/number-guessor/",
];
const projectDescriptions = [
  "This project is the landing page for a fictional coffee shop called Zen Coffee.",
  "This project is a number guessing game in which you challenge the computer to see who can get closer to a secret number.",
];
const githubPageLinks = [
  "https://github.com/m-Colen/zen-coffee",
  "https://github.com/m-Colen/number-guessor",
];
const liveProjectLinks = [
  "https://m-colen.github.io/zen-coffee/",
  "https://m-colen.github.io/number-guessor/",
];

// To increment/decrement project count on each interaction
let projectNumber = 0;

// Moves to next project in arr
const moveRight = () => {
  projectNumber < projectSites.length - 1
    ? projectNumber++
    : (projectNumber = 0);
  projectDisplay.setAttribute("src", projectSites[projectNumber]);
  projectSummaryText.innerHTML = projectDescriptions[projectNumber];
  githubButton.setAttribute("href", githubPageLinks[projectNumber]);
  liveButton.setAttribute("href", liveProjectLinks[projectNumber]);
};

// Moves to previous project in arr
const moveLeft = () => {
  projectNumber >= 1
    ? projectNumber--
    : (projectNumber = projectSites.length - 1);
  projectDisplay.setAttribute("src", projectSites[projectNumber]);
  projectSummaryText.innerHTML = projectDescriptions[projectNumber];
  githubButton.setAttribute("href", githubPageLinks[projectNumber]);
  liveButton.setAttribute("href", liveProjectLinks[projectNumber]);
};

rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);