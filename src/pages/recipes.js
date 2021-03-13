import React from "react"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
const Recipes = () => {
  return (
    <>
      <SEO title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </>
  )
}

export default Recipes
