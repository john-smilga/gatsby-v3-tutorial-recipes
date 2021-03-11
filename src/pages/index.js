import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import RecipesList from "../components/RecipesList"
import Recipes from "../components/RecipesList"

const Home = () => {
  return (
    <main className="page">
      <header className="hero">
        <StaticImage
          src="../assets/images/main-bcg.jpeg"
          alt="Person Pouring Salt in Bowl"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        ></StaticImage>
        <div className="hero-container">
          <div className="hero-text">
            <h1>gatsby recipes</h1>
            <h4>no fluff, just recipes</h4>
          </div>
        </div>
      </header>
      <section>
        <RecipesList />
      </section>
    </main>
  )
}

export default Home
