const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      // console.log(tag)
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  return Object.entries(allTags)
}

export default setupTags
