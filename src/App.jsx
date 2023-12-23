import { useState, createContext } from 'react';
import './App.css';
import Todos from './Todos';
import Header from "./Header";
import Home from './Home';
import Lorem from './Lorem';
import { Route, Routes } from 'react-router-dom';
import LogInUp from './LogInUp';

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
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/lorem' element={<Lorem />}/>
        <Route path='/todos' element={<Todos />}/>
        <Route path='/login' element={<LogInUp />}/>
        {/* <Lorem />
        <Todos /> */}
      </Routes>
    </ThemeContext.Provider>
  );
}
