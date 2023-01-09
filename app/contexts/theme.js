import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();



export default function ThemeWrapper({ children }) {
  // Get the current theme from local storage
  const currentTheme = localStorage.getItem('theme');
  const [isDarkTheme, setIsDarkTheme] = useState(currentTheme === 'dark');
  const [clicked, setClicked] = useState(true);

  function initialThemeHandle() {
    // If the theme is dark, add the dark class to the body element
    if (isDarkTheme) {
      document.querySelector('body').classList.add('dark');
    }
  }
  function handleClick () {
    setClicked(!clicked);
  };


  function toggleThemeHandler() {
    // Toggle the theme state
    setIsDarkTheme(!isDarkTheme);

    // Toggle the dark class on the body element
    document.querySelector('body').classList.toggle('dark');

    // Save the theme to local storage
    localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
  }

  const globalState = {
    isDarkTheme,
    toggleThemeHandler,
    clicked,
    handleClick
  };

  useEffect(() => {
    initialThemeHandle()  

   

  });

  return (
    <ThemeContext.Provider value={globalState}>
      {children}
    </ThemeContext.Provider>
  );
}
