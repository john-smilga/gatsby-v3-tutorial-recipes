import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const About = () => {
  return (
    <main className="page">
      <section className="about-page">
        <article>
          <h2>We just wanted a recipe website that cut to the chase.</h2>
          <p>
            We also had a hard time remembering our own recipes. So, why not
            make an awesome website?
          </p>
          <p>We're just getting started, so be sure to check back regularly!</p>
          <p>If you have any suggestions for us, shoot us a line!</p>
          <Link to="/contact" className="btn">
            contact
          </Link>
        </article>
        <StaticImage
          src="../assets/images/about-photo.jpeg"
          alt="Person Pouring Salt in Bowl"
          className="about-img"
          placeholder="blurred"
          height={500}
        ></StaticImage>
      </section>
    </main>
  )
}

export default About
