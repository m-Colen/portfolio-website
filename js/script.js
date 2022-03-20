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

// Hides mobile nav when width passes the 600px threshold

const resetNav = () => {
  if (window.innerWidth >= 600) {
    mobileNavMenu.style.display = 'none';
    topBun.className = 'hamburger-item';
    bottomBun.className = 'hamburger-item';
  }
}

window.addEventListener('resize', resetNav);
