import React from "react"

import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <main className="page">
      <section className="contact-page">
        <article className="contact-info">
          <h3>Want to get in touch?</h3>
          <p>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulb synth.
          </p>
          <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
          <p>
            Hashtag swag health goth air plant, raclette listicle fingerstache
            cold-pressed fanny pack bicycle rights cardigan poke.
          </p>
        </article>
        <article>
          <form className="form contact-form">
            <div className="form-row">
              <label htmlFor="name">your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">your name</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn block">
              submit
            </button>
          </form>
        </article>
      </section>
      <section className="featured-recipes">
        <h5>Look at this Awesomesauce! </h5>
        <RecipesList recipes={recipes} />
      </section>
    </main>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(backgroundColor: "")
        }
      }
    }
  }
`
export default Contact
