import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
