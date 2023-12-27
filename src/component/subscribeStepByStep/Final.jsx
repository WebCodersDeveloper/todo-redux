import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Final() {
  const auth = useSelector((state) => state.auth);
  const { theme } = useContext(ThemeContext);

  const handleSaveClick = () => {
    localStorage.setItem('user_info', JSON.stringify(auth));
    toast.success('User info saved to localStorage!');
  };

  return (
    <div className={`log_center ${theme}__lg`}>
      <div className='final'>
        <h1>Your info...</h1>
        <h3>Login: {auth.log}</h3>
        <h3>Password: {auth.psw}</h3>
        <h4>Subscribe Type: {auth.subcType}</h4>
        <p>First Name: {auth.firstName}</p>
        <p>Last Name: {auth.lastName}</p>
        <p>BirthDate: {auth.birthDate}</p>
        <p>Email: {auth.email}</p>
        <p>Gender: {auth.gender}</p>
        <p>Credit Card: {auth.creditCard}</p>
        <button onClick={handleSaveClick}>Save</button>
        <ToastContainer />
      </div>
    </div>
  );
}
