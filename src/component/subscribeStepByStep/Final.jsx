import  { useContext } from 'react'
import { useSelector } from 'react-redux'
import { ThemeContext } from '../../App'

export default function Final() {
    const auth = useSelector((state) => state.auth)
    const {theme} = useContext(ThemeContext)
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
        </div>
    </div>
  )
}
