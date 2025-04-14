export const isDarkMode = (): boolean => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const applyTheme = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
