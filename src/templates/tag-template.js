import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  console.log(recipes)
  return (
    <main className="page">
      <h2>{pageContext.tag}</h2>
      <div className="tag-recipes">
        <RecipesList recipes={recipes} />
      </div>
    </main>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        slug
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
export default TagTemplate
