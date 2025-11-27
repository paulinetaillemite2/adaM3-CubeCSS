// Navbar Toggle
const hamburger = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.navbar__menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    
    hamburger.setAttribute('aria-expanded', !isOpen);
    menu.classList.toggle('is-open');
  });

  // Close menu when clicking on a link
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    });
  });
}

