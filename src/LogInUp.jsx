// import React from 'react'

import { useContext, useState } from "react"
import { ThemeContext } from "./App"
import { useDispatch, useSelector } from "react-redux";
import { login } from "./component/login/loginSlicer";

export default function LogInUp() {
    const {theme} = useContext(ThemeContext)
    const dispatch = useDispatch();
    const log = useSelector((state) => state.userLogin)
    console.log(log);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ userName: name, email: email, isLogined: true }));
        setName("")
        setEmail("")
    };
      

  return (
    <>
        <div className={`sign_main ${theme}`}>
            <div className="sign_main_center">
                <div className={`left ${theme}_bg`}></div>
                <div className="right">
                    <div className="right__main">
                        <h3>Welcome back</h3>
                        <h1>Login to your account</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="UserNAme">Username</label>
                            <input className="inp" type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="Email">Email</label>
                            <input className="inp" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <div className="rmf">
                                <span>
                                    <input type="checkbox" />
                                    <p>Remember me</p>
                                </span>
                                <b>Forgot password?</b>
                            </div>
                            <button className="btn_log">Login now</button>
                        </form>
                        <button className="btn_gg">Or sign-in with google</button>
                    </div>
                    <h5 className="free">Dont have an account? Join free today</h5>
                </div>
            </div>
        </div>
    </>
  )
}
