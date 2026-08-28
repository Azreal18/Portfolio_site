export function initNavigation() {
  const menuButton = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuButton || !navLinks) return;

  const setMenuState = (isOpen) => {
    navLinks.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  };

  menuButton.addEventListener('click', () => {
    setMenuState(!navLinks.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setMenuState(false);
  });
}
