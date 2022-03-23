/* Nav Section */

const hamMenu = document.getElementById('hamburger-menu');
const topBun = document.getElementById('ham-top-bun');
const bottomBun = document.getElementById('ham-bottom-bun');
const mobileNavMenu = document.getElementById('nav-links-mobile');
const navLinks = document.getElementById('nav-links');

// Toggle hamburger menu 
const hamMenuToggle = () => {
  topBun.className === 'hamburger-item' || topBun.className === 'hamburger-item start' ? topBun.className = 'hamburger-item ham-top-inactive' : topBun.className = 'hamburger-item';
  bottomBun.className === 'hamburger-item' || bottomBun.className === 'hamburger-item start' ? bottomBun.className = 'hamburger-item ham-bottom-inactive' : bottomBun.className = 'hamburger-item';
  mobileNavMenu.style.display === 'none' || topBun.className === 'hamburger-item ham-top-inactive' ? mobileNavMenu.style.display = 'block' : mobileNavMenu.style.display = 'none'
};

hamMenu.addEventListener('click', hamMenuToggle);

// Hides mobile nav when width passes 700px threshold

const resetNav = () => {
  if (window.innerWidth >= 700) {
    mobileNavMenu.style.display = 'none';
    topBun.className = 'hamburger-item';
    bottomBun.className = 'hamburger-item';
  }
}

window.addEventListener('resize', resetNav);

/* About me section */

const aboutMeSection = document.getElementById('about-text');
const aboutButton = document.getElementById('about-me-button');
const aboutMeClosed = document.getElementById('about-me-button-close')
const mainNavAbout = document.getElementById('main-nav-about');
const mobileNavAbout = document.getElementById('mobile-nav-about');

const aboutButtonToggle = () => {
  // To toggle "about me" text
  if (aboutMeSection.className === '' && window.innerWidth > 650) {
    aboutMeSection.className = 'active unhidden-large';
  } else if (aboutMeSection.className === '' && window.innerWidth <= 650) {
    aboutMeSection.className = 'active unhidden-small';
  } else {
    aboutMeSection.className = '';
  }
  aboutMeClosed.className === 'inactive' ? aboutMeClosed.className = '' : aboutMeClosed.className = 'inactive';
}

aboutButton.addEventListener('click', aboutButtonToggle);
mainNavAbout.addEventListener('click', aboutButtonToggle);
mobileNavAbout.addEventListener('click', aboutButtonToggle);
aboutMeClosed.addEventListener('click', aboutButtonToggle);

/* To monitor for shift from desktop to mobile width in order to adjust about-me margin */

const updateWidth = () => {
  if (window.innerWidth <= 650 && aboutMeSection.className !== '') {
    aboutMeSection.className = 'active unhidden-small';
  } else if (window.innerWidth > 650 && aboutMeSection.className !== '') {
    aboutMeSection.className = 'active unhidden-large';
  }
}

window.addEventListener('resize', updateWidth);

/* Project carousel */

// Targets
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// What I want to change
const projectDisplay = document.getElementById('project-display');
const projectSummaryText = document.getElementById('project-summary-text');
const githubButton = document.getElementById('project-github-button');
const liveButton = document.getElementById('project-live-button');

// Arr for live sites

const projectSites = ['https://m-colen.github.io/gibson-landing/','https://m-colen.github.io/number-guessor/'];
const projectDescriptions = ['This project is my attempt at re-creating the main Gibson Guitars landing page.','This project is a number guessing game in which you challenge the computer to see who can get closer to a secret number.'];
const githubPageLinks = ['https://github.com/m-Colen/gibson-landing','https://github.com/m-Colen/number-guessor'];
const liveProjectLinks = ['https://m-colen.github.io/gibson-landing/','https://m-colen.github.io/number-guessor/'];

let projectNumber = 0;

const moveRight = () => {
  projectNumber < projectSites.length - 1 ? projectNumber++ : projectNumber = 0;
  projectDisplay.setAttribute('src', projectSites[projectNumber]);
  projectSummaryText.innerHTML = projectDescriptions[projectNumber];
  githubButton.setAttribute('href', githubPageLinks[projectNumber]);
  liveButton.setAttribute('href', liveProjectLinks[projectNumber]);
};

const moveLeft = () => {
  projectNumber >= 1 ? projectNumber-- : projectNumber = projectSites.length - 1;
  projectDisplay.setAttribute('src', projectSites[projectNumber]);
  projectSummaryText.innerHTML = projectDescriptions[projectNumber];
  githubButton.setAttribute('href', githubPageLinks[projectNumber]);
  liveButton.setAttribute('href', liveProjectLinks[projectNumber]);
};

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
