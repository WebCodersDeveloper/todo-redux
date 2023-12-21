import { useState, createContext } from 'react';
import './App.css';
import Todos from './Todos';
import Header from "./Header";

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      <Header />
      <Todos />
    </ThemeContext.Provider>
  );
}
