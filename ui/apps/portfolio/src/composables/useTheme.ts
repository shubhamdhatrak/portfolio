import { ref } from 'vue';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

const theme = ref<Theme>('light');

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return null;
}

export function resolveTheme(): Theme {
  return getStoredTheme() ?? 'light';
}

export function applyTheme(next: Theme) {
  document.documentElement.setAttribute('data-theme', next);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', next === 'dark' ? '#0f172a' : '#ffffff');
  }
}

export function initTheme() {
  const resolved = resolveTheme();
  theme.value = resolved;
  applyTheme(resolved);
}

export function useTheme() {
  function toggleTheme() {
    const next: Theme = theme.value === 'light' ? 'dark' : 'light';
    theme.value = next;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  return { theme, toggleTheme };
}
