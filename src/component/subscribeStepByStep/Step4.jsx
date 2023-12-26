import React, { useContext, useState } from 'react';
import Cleave from 'cleave.js/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCreditCard } from '../auth/auth';
import { ThemeContext } from '../../App';

function Step4() {
  const [creditCard, setCreditCard] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const { theme, next } = useContext(ThemeContext);

  const handleSubmit = () => {
    if (creditCard.trim()) {
      dispatch(addCreditCard(creditCard));
      console.log(auth);
      setCreditCard('');
      next();
    } else {
      toast.error('Please enter a valid credit card number.');
    }
  };

  return (
    <>
      <div className={`selection ${theme}_opt`}>
        <div className={`option ${theme}_opt`}>
          <Cleave
            placeholder="Enter your credit card"
            options={{ creditCard: true }}
            onChange={(e) => setCreditCard(e.target.value)}
            value={creditCard}
          />
          <button onClick={handleSubmit}>Next</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Step4;
