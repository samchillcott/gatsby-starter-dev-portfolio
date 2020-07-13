import React from "react"
import Layout from "../components/Layout"
import aboutStyle from "./About.module.scss"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.

        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = props => {
  console.log(query)
  return (
    <Layout>
      <div className={aboutStyle.main}>
        <div className={aboutStyle.derecha}>
          <h3>About Me</h3>

          <p>Sweet balance of left & right brain.</p>
          <p>
            Autodidact frontend developer with a design eye and top-drawer soft
            skills.
          </p>
          <p>Coach specializing in productivity.</p>
          <p>Keen to learn from seasoned professionals. </p>
          <p>Working remotely since 2013.</p>

          <div className={aboutStyle.logoContainer}>
            <h3>Skills</h3>
            <img
              alt="javascript"
              className={aboutStyle.logo}
              src="./logos/javascript.svg"
            />
            <img
              alt="React"
              className={aboutStyle.logo}
              src="./logos/react.svg"
            />
            <img
              alt="Gatsby"
              className={aboutStyle.logo}
              src="./logos/gatsby.svg"
            />
            <img
              alt="Sass"
              className={aboutStyle.logo}
              src="./logos/sass.svg"
            />
            <img
              alt="Bootstrap"
              className={aboutStyle.logo}
              src="./logos/bootstrap.svg"
            />
            {/* <img
              alt="HTML"
              className={aboutStyle.logo}
              src="./logos/html5.svg"
            />
            <img
              alt="CSS"
              className={aboutStyle.logo}
              src="./logos/css3.svg"
            /> */}
            <img alt="Git" className={aboutStyle.logo} src="./logos/git.svg" />
            <img
              alt="GitHub"
              className={aboutStyle.logo}
              src="./logos/github.svg"
            />
            <img
              alt="Firebase"
              className={aboutStyle.logo}
              src="./logos/firebase.svg"
            />
          </div>

          <div className={aboutStyle.socialContainer}>
            <h3>Contact Me</h3>
            <a
              className={aboutStyle.social}
              href="https://e-mailer.link/100116626233"
              target="_blank"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
