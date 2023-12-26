import  { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formApiliation } from "../auth/auth";
import { ThemeContext } from "../../App";

export default function Step3() {
  const log = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { theme, next } = useContext(ThemeContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = (e) => {
    setGender(e.target.value);
  }

  const toggleCheckbox = () => {
    setCheckbox((prev) => !prev);
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (
      firstName.trim() &&
      lastName.trim() &&
      birth.trim() &&
      gender.trim() &&
      email.trim() &&
      checkbox
    ) {
      dispatch(
        formApiliation({
          firstName: firstName,
          lastName: lastName,
          birthDate: birth,
          email: email,
          gender: gender,
        })
      );
      next();
    } else {
      toast.error("Please fill in all fields correctly.");
    }
  };

  return (
    <>
      <div className={`log_center ${theme}__lg`}>
        <form onSubmit={handleSave}>
          <label htmlFor="FirstName">First Name:</label>
          <input
            type="text"
            placeholder="First Name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="BirthDate">Birth Date:</label>
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Gender">Gender</label>
          <div className="gender">
            <span>
              <p>Male</p>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
            </span>
            <span>
              <p>Female</p>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
            </span>
          </div>
          <span>
            <input
              type="checkbox"
              checked={checkbox}
              onChange={toggleCheckbox}
            />
            <p>I`m older than 18</p>
          </span>
          <button>Next</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
