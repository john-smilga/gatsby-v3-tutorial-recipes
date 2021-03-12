import React from "react"
import { Link } from "gatsby"
const TagsList = ({ recipes }) => {
  // get all tags
  let tags = recipes.map(recipe => {
    return recipe.content.tags
  })
  // flatten array
  tags = tags.flat()
  // get amount
  tags = tags.reduce((total, item) => {
    if (total[item]) {
      total[item] = total[item] + 1
    } else {
      total[item] = 1
    }
    return total
  }, {})
  const newTags = Object.entries(tags)

  return (
    <div className="tags-container">
      <h5>recipes</h5>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
