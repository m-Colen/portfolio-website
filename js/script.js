/* Nav Section */

// Setting up hamburger menu variables

const topBun = document.getElementById('ham-top-bun');
const bottomBun = document.getElementById('ham-bottom-bun');
const hamMenu = document.getElementById('hamburger-menu');
const mobileNavMenu = document.getElementById('nav-links-mobile');
const navLinks = document.getElementById('nav-links');

// Toggle hamburger menu 
const hamMenuToggle = () => {
  topBun.className === 'hamburger-item' || topBun.className === 'hamburger-item start' ? topBun.className = 'hamburger-item ham-top-inactive' : topBun.className = 'hamburger-item';
  bottomBun.className === 'hamburger-item' || bottomBun.className === 'hamburger-item start' ? bottomBun.className = 'hamburger-item ham-bottom-inactive' : bottomBun.className = 'hamburger-item';
  mobileNavMenu.style.display === 'none' || topBun.className === 'hamburger-item ham-top-inactive' ? mobileNavMenu.style.display = 'block' : mobileNavMenu.style.display = 'none'
};

hamMenu.addEventListener('click', hamMenuToggle);

// Hides mobile nav when width passes 600px threshold

const resetNav = () => {
  if (window.innerWidth >= 600) {
    mobileNavMenu.style.display = 'none';
    topBun.className = 'hamburger-item';
    bottomBun.className = 'hamburger-item';
  }
}

window.addEventListener('resize', resetNav);

/* About me section setup */

const aboutMeSection = document.getElementById('background-divider');
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