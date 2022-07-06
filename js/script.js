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

// Adds functionality to the "about" button(s) to show/hide text

const aboutButton = document.querySelectorAll(".about-button");
const closeButton = document.querySelector("#about-me-button-close");
const banner = document.querySelector(".about-top-card");

const toggleAboutCard = () => {
  const aboutCard = document.querySelector(".about-text");
  const aboutMinimal = document.querySelector(".about-minimal");
  aboutCard.classList.toggle("unhidden");
  aboutCard.classList.toggle("active");
  aboutMinimal.classList.toggle("inactive");
  closeButton.classList.toggle("inactive");

  // Decreases the size of the banner section on about me activation
  banner.classList.toggle("minimal");
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
  <h4>Kona Coffee</h4>
  <p>For this build I wanted to see if I could create something similar to the Starbucks home page. As such, I created the home page for a fictional coffee company called Kona Coffee which is influenced by the Starbucks home page design.</p>
  <p>I learned a lot of new things building out this page, including:</p>
  <ul>
  <li>Learning to use FireFox, Chrome Dev Tools more in depth. I learned that the answers to a lot of my questions are out there if I just look at the Dev Tools.</li>
  <li>Learning to re-use classes more effectively. In this project, a lot of the card styles are shared so I can easily add more in the future if needed.</li>
  <li>Working with building interactive accordions for the footer section.</li>
  <li>Finally, I tried to make some of my JS functions more modular during this build. I attempted to seperate out some of the functions to make their uses more clear.</li>
  </ul>
  <p>Overall, this was a fun build and taught me a lot about using Dev Tools.</p>
  `,
  "This project is a JS number guessing game in which you challenge the computer to see who can get closer to a secret number.",
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
