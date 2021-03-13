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
        <p>
          &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built
          with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
      </footer>
    </>
  )
}

export default Layout
