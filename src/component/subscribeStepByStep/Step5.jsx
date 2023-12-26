import  { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../../App";

export default function Step5() {
  const auth = useSelector((state) => state.auth);

  const [agreed, setAgreed] = useState(false);
  const [agreed2, setAgreed2] = useState(false);

  const { theme, next } = useContext(ThemeContext);

  console.log(auth);
  console.log(agreed, agreed2);

  const handleFinally = () => {
    if (agreed && agreed2) {
      next();
    } else {
      toast.error('Please agree to both statements.');
    }
  };

  return (
    <>
      <div className={`step5 ${theme}_opt`}>
        <div className={`option ${theme}_opt`}>
          <input type="text" value={auth.log} disabled />
          <input type="text" value={auth.email} disabled />
          <span>
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed((prev) => !prev)}
            />
            <p>The consent to personal data processing</p>
          </span>
          <span>
            <input
              type="checkbox"
              checked={agreed2}
              onChange={() => setAgreed2((prev) => !prev)}
            />
            <p>Site uses cookie agreement</p>
          </span>
          <button onClick={handleFinally}>Next</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
