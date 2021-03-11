import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
        prep
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
      <div className="tags-list">
        <h3>recipes</h3>
      </div>
      <div className="recipes-list">
        {recipes.map(recipe => {
          const { id, title, image } = recipe
          const pathToImage = getImage(image)
          return (
            <Link key={id} to={`/${id}`} className="recipe">
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={title}
              />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Recipes
