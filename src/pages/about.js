import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
const About = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <main className="page">
      <section className="about-page">
        <article>
          <h2>I'm baby coloring book poke taxidermy</h2>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
          </p>
          <p>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </p>

          <Link to="/contact" className="btn">
            contact
          </Link>
        </article>
        <StaticImage
          src="../assets/images/about-photo.jpeg"
          alt="Person Pouring Salt in Bowl"
          className="about-img"
          placeholder="blurred"
        ></StaticImage>
      </section>
      <section className="about-recipes">
        <p>Gastropub ethical mlkshk put a bird on it.</p>
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

export default About
