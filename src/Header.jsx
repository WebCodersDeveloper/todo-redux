// import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './App';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './component/login/loginSlicer';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = useSelector((state) => state.userLogin)
  const dispatch = useDispatch();
  // console.log(user);
  const handleClick = () =>{
    dispatch(logout())
  }
  return (
    <header className={`nav ${theme}`}>
      <h2 className='nic'>{user.userName}</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lorem">Lorem</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/login">LogIn</Link>
      </nav>
      <div className="btn">
      <button onClick={toggleTheme}>Change Theme</button>
      {user.isLogined && <button onClick={handleClick}>Log Out</button>}
      </div>
    </header>
  );
}
