// import React from 'react'

import { useContext } from "react"
import { ThemeContext } from "./App"

export default function Home() {
    const {theme} = useContext(ThemeContext)
  return (
    <>
        <div className={`main ${theme}_main`}>
            <h1>Home Page</h1>
        </div>
    </>
  )
}
