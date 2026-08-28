const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeMenu = document.getElementById('themeMenu');
const themeButtons = themeMenu ? themeMenu.querySelectorAll('button') : [];

function markActiveTheme() {
  const current = root.getAttribute('data-theme') || '';
  themeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === current);
  });
}

function closeThemeMenu() {
  if (!themeMenu || !themeToggle) return;
  themeMenu.classList.remove('open');
  themeToggle.setAttribute('aria-expanded', 'false');
}

export function initThemePicker() {
  if (!themeToggle || !themeMenu) return;

  themeToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = themeMenu.classList.toggle('open');
    themeToggle.setAttribute('aria-expanded', String(isOpen));
  });

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.theme;
      if (value) root.setAttribute('data-theme', value);
      else root.removeAttribute('data-theme');
      markActiveTheme();
      closeThemeMenu();
    });
  });

  document.addEventListener('click', (event) => {
    if (!themeMenu.contains(event.target)) closeThemeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeThemeMenu();
  });

  markActiveTheme();
}
