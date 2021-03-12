const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetRecipes {
      content: allContentfulRecipe(sort: { fields: title, order: ASC }) {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.content.nodes.forEach(recipe => {
    createPage({
      path: `/${recipe.slug}`,
      component: path.resolve(`src/templates/recipe-template.js`),
      context: {
        slug: recipe.slug,
      },
    })
  })
}
