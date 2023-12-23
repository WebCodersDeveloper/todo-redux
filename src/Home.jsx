// import React from 'react'

import { useContext } from "react"
import { ThemeContext } from "./App"
import { useSelector } from "react-redux"

export default function Home() {
    const {theme} = useContext(ThemeContext)
    const user = useSelector((state) => state.userLogin)
  return (
    <>
        <div className={`main ${theme}_main`}>
            <h2>Welcome back</h2>
            <h1>{user.userName}</h1>
        </div>
    </>
  )
}
