// import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './App';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`nav ${theme}`}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lorem">Lorem</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <button onClick={toggleTheme}>Change Theme</button>
    </header>
  );
}
