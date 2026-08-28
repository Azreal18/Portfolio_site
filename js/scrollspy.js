export function initScrollSpy() {
  const railButtons = document.querySelectorAll('.thread-rail button');
  const sections = ['home', 'about', 'services', 'experience', 'work', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-links a');

  railButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.target);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const setActive = (id) => {
    railButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.target === `#${id}`);
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}
