import React from "react"
import RecipesList from "../components/RecipesList"
const Error = () => {
  return (
    <main className="page">
      <section className="error-page">
        <h1>404</h1>
        <h3>page not found</h3>
      </section>
      <section className="error-recipes">
        <p>Cronut distillery pork belly offal cred food truck.</p>
        <RecipesList />
      </section>
    </main>
  )
}

export default Error
