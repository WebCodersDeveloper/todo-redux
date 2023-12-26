import  { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { authorize } from "../auth/auth";

export default function Step1() {
  const { theme, next } = useContext(ThemeContext);
  const [log, setLog] = useState("");
  const [logPsw, setLogPsw] = useState("");
  const [checkPsw, setCheckPsw] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (log.trim() !== "" && logPsw.trim() !== "" && logPsw.length >= 5 && logPsw === checkPsw) {
      dispatch(authorize({ log: log, psw: logPsw }));
      next();
    } else {
      toast.error("Please fill in all fields correctly!!!");
    }
  }

  return (
    <>
      <div className={`log_center ${theme}__lg`}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Login">Login</label>
          <input type="text" placeholder="Enter your email..." value={log} onChange={(e) => setLog(e.target.value)} />
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Enter your password..." value={logPsw} onChange={(e) => setLogPsw(e.target.value)} />
          <label htmlFor="Confirm">Confirm Password</label>
          <input type="password" placeholder="Confirm your password..." value={checkPsw} onChange={(e) => setCheckPsw(e.target.value)} />
          <button>Next</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
