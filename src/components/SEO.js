import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nytimes" />
      <meta name="twitter:creator" content="@SarahMaslinNir" />
      <meta
        name="twitter:title"
        content="Parade of Fans for Houston’s Funeral"
      />
      <meta
        name="twitter:description"
        content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."
      />
      <meta
        name="twitter:image"
        content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
      />
    </Helmet>
  )
}

export default SEO
