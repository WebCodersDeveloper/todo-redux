import { useState, createContext } from 'react';
import './App.css';
import Todos from './Todos';
import Header from "./Header";
import Home from './Home';
import Lorem from './Lorem';
import { Route, Routes } from 'react-router-dom';
import LogInUp from './LogInUp';
import Netflix from './Netflix';

export const ThemeContext = createContext({
  theme: 'dark',
  step: 2,
  next: () =>{},
  toggleTheme: () => {},

});

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [step, setStep] = useState(1)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const next = () =>{
    setStep(step + 1);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, step, next}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/lorem' element={<Lorem />}/>
        <Route path='/todos' element={<Todos />}/>
        <Route path='/subscribe' element={<Netflix />}/>
        <Route path='/login' element={<LogInUp />}/>
        {/* <Lorem />
        <Todos /> */}
      </Routes>
    </ThemeContext.Provider>
  );
}
