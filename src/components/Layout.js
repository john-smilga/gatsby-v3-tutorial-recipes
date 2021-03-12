import React from "react"
import Navbar from "./Navbar"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer className="page-footer">
        <h5>&copy; {new Date().getFullYear()} Gatsby Recipes</h5>
      </footer>
    </>
  )
}

export default Layout
