// import React from 'react'

import { useContext } from "react"
import { ThemeContext } from "./App"

export default function Lorem() {
    const {theme} = useContext(ThemeContext)
  return (
    <>
        <div className={`main ${theme}_main`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab, praesentium, atque earum voluptas aut facere, magnam iure sint pariatur a quis. Sunt culpa, amet rerum maxime nemo quisquam doloremque quia libero tempora dolores deserunt officia voluptas ex natus! Quod nobis rerum molestiae necessitatibus. Facere ullam maiores soluta pariatur molestiae?</p>
        </div>
    </>
  )
}
