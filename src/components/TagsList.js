import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
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
