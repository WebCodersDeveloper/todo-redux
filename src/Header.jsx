import { useContext } from 'react';
import { ThemeContext } from './App';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`nav ${theme}`}>
      <button onClick={toggleTheme}>Change Theme</button>
    </header>
  );
}
