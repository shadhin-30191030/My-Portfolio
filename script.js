// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navlinks = document.querySelector('.navlinks');

  if (toggle && navlinks) {
    toggle.addEventListener('click', () => {
      navlinks.classList.toggle('open');
    });

    // close menu after clicking a link
    navlinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navlinks.classList.remove('open');
      });
    });
  }
});
