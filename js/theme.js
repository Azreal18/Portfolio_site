const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeMenu = document.getElementById('themeMenu');
const themeButtons = themeMenu ? themeMenu.querySelectorAll('button') : [];
const metaThemeColor = document.getElementById('metaThemeColor') || document.querySelector('meta[name="theme-color"]');

const THEME_COLORS = {
  white: '#FFFFFF',
  light: '#F8F7F4',
  ledger: '#F4F6F1',
  dark: '#090A0F',
  indigo: '#0D111A',
};

function getActiveColor() {
  const currentTheme = root.getAttribute('data-theme');
  if (currentTheme && THEME_COLORS[currentTheme]) {
    return THEME_COLORS[currentTheme];
  }
  const isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  return isLight ? THEME_COLORS.white : THEME_COLORS.dark;
}

function updateMetaThemeColor() {
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', getActiveColor());
  }
}

function markActiveTheme() {
  const current = root.getAttribute('data-theme') || '';
  themeButtons.forEach((button) => {
    const btnTheme = button.dataset.theme || '';
    const isActive = btnTheme === current;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });
}

function closeThemeMenu() {
  if (!themeMenu || !themeToggle) return;
  themeMenu.classList.remove('open');
  themeToggle.setAttribute('aria-expanded', 'false');
}

export function initThemePicker() {
  if (!themeToggle || !themeMenu) return;

  // Sync initial theme from localStorage
  try {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved && saved !== 'auto') {
      root.setAttribute('data-theme', saved);
    } else {
      root.removeAttribute('data-theme');
    }
  } catch (e) {}

  markActiveTheme();
  updateMetaThemeColor();

  // Listen for real-time device / OS theme changes
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDeviceThemeChange = () => {
      const saved = localStorage.getItem('portfolio_theme') || 'auto';
      if (saved === 'auto') {
        updateMetaThemeColor();
        markActiveTheme();
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleDeviceThemeChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleDeviceThemeChange);
    }
  }

  // Toggle theme menu
  themeToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = themeMenu.classList.toggle('open');
    themeToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Handle theme option selection
  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.theme;
      try {
        if (value) {
          root.setAttribute('data-theme', value);
          localStorage.setItem('portfolio_theme', value);
        } else {
          root.removeAttribute('data-theme');
          localStorage.setItem('portfolio_theme', 'auto');
        }
      } catch (e) {}

      markActiveTheme();
      updateMetaThemeColor();
      closeThemeMenu();
    });
  });

  // Close when clicking outside or pressing Escape
  document.addEventListener('click', (event) => {
    if (!themeMenu.contains(event.target) && !themeToggle.contains(event.target)) {
      closeThemeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeThemeMenu();
  });
}
