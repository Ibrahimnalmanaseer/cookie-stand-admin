import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeWrapper({ children }) {
  // Get the current theme from local storage
  const currentTheme = localStorage.getItem('theme');
  const [isDarkTheme, setIsDarkTheme] = useState(currentTheme === 'dark');

  function initialThemeHandle() {
    // If the theme is dark, add the dark class to the body element
    if (isDarkTheme) {
      document.querySelector('body').classList.add('dark');
    }
  }

  function toggleThemeHandler() {
    // Toggle the theme state
    setIsDarkTheme(!isDarkTheme);

    // Toggle the dark class on the body element
    document.querySelector('body').classList.toggle('dark');

    // Save the theme to local storage
    localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
  }

  const globalState = {
    isDarkTheme: true,
    toggleThemeHandler,
  };

  useEffect(() => {
    initialThemeHandle();
  });

  return (
    <ThemeContext.Provider value={globalState}>
      {children}
    </ThemeContext.Provider>
  );
}
