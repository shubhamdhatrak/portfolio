import { themes, type ThemeId } from '../data/portfolio';

export function getChapterThemeStyle(theme: ThemeId) {
  const config = themes[theme];
  return {
    '--chapter-accent': config.accent,
    '--chapter-accent-muted': config.accentMuted,
  };
}

export function getThemeAccent(theme: ThemeId) {
  return themes[theme].accent;
}

export function getThemeLabel(theme: ThemeId) {
  return themes[theme].label;
}
