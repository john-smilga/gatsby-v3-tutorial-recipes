import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        contentful_id
        cookTime
        description {
          description
        }
        featured
        id
        prepTime
        servings
        title
        content {
          ingredients
          instructions
          tools
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Recipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default Recipes
