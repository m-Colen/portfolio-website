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

// Hides mobile nav when width passes 700px threshold
const resetNav = () => {
  const mobileNav = document.querySelector("#nav-links-mobile");
  const hamTopBun = document.querySelector(".ham-top-bun");
  const hamMiddle = document.querySelector(".ham-middle");
  const hamBottomBun = document.querySelector(".ham-bottom-bun");
  if (window.innerWidth >= 700) {
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

// Adds functionality to the "about" button(s) to show/hide text

const aboutButton = document.querySelectorAll(".about-button");
const closeButton = document.querySelector("#about-me-button-close");

const toggleAboutCard = () => {
  const aboutCard = document.querySelector(".about-text");
  const aboutTopCard = document.querySelector(".about-top-card");
  aboutCard.classList.toggle("unhidden");
  aboutCard.classList.toggle("inactive");
  aboutTopCard.classList.toggle("inactive");
  closeButton.classList.toggle("inactive");
};

aboutButton.forEach((item) => item.addEventListener("click", toggleAboutCard));
closeButton.addEventListener("click", toggleAboutCard);

/*
 * Project carousel
 */

// Targets
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

// Variables needing updated on each project change
const projectDisplay = document.querySelector(".carousel-img");
const projectSummaryText = document.querySelector(".project-summary-text");
const githubButton = document.querySelector("#project-github-button");
const liveButton = document.querySelector("#project-live-button");

// Arrays for project data
const projectImages = [
  "https://github.com/m-Colen/portfolio-website/blob/main/images/kona-coffee-thumbnail.PNG?raw=true",
  "https://github.com/m-Colen/portfolio-website/blob/main/images/number-guessor-thumbnail.PNG?raw=true",
];

const projectDescriptions = [
  `
<h4>Kona Coffee (Starbucks Homepage)</h4>
            <p>For this build I created a clone of the Starbucks homepage as of July 2022 for a fictional coffee company called Kona Coffee.</p>
            <p>I learned a lot of new things building out this page, including:</p>
            <ul>
              <li>Learning to use the FireFox & Chrome Dev Tools more in-depth.</li>
              <li>Re-using classes more efficiently.</li>
              <li>Building interactive accordions for the footer links section.</li>
              <li>Making my JS functions more modular and clarifying their intent.</li>
            </ul>
            <p>Overall, this was a fun build and taught me a lot about using Dev Tools and DRY principals.</p>
  `,
  `
  <h4>Number Guessor</h4>
  <p>This project is a JavaScript based number guessing game in which the user can challenge the computer to see who can guess a number closest to a secret number.</p>
  `,
];

const githubPageLinks = [
  "https://github.com/m-Colen/kona-coffee",
  "https://github.com/m-Colen/number-guessor",
];

const liveProjectLinks = [
  "https://m-colen.github.io/kona-coffee/",
  "https://m-colen.github.io/number-guessor/",
];

// To increment/decrement project count on each interaction
let projectNumber = 0;

// Moves to next project in arr
const moveRight = () => {
  projectNumber < projectImages.length - 1
    ? projectNumber++
    : (projectNumber = 0);
  projectDisplay.setAttribute("src", projectImages[projectNumber]);
  projectSummaryText.innerHTML = projectDescriptions[projectNumber];
  githubButton.setAttribute("href", githubPageLinks[projectNumber]);
  liveButton.setAttribute("href", liveProjectLinks[projectNumber]);
};

// Moves to previous project in arr
const moveLeft = () => {
  projectNumber >= 1
    ? projectNumber--
    : (projectNumber = projectImages.length - 1);
  projectDisplay.setAttribute("src", projectImages[projectNumber]);
  projectSummaryText.innerHTML = projectDescriptions[projectNumber];
  githubButton.setAttribute("href", githubPageLinks[projectNumber]);
  liveButton.setAttribute("href", liveProjectLinks[projectNumber]);
};

rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);
