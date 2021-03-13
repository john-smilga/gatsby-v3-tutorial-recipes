import React from "react"
import { graphql } from "gatsby"
const RecipeTemplate = ({ data }) => {
  const title = data.content.title
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export const query = graphql`
  query getSingleRecipe($slug: String) {
    content: contentfulRecipe(slug: { eq: $slug }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
