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

const About = (props) => {
  console.log(query)
  return (
    <Layout>
      <div className={aboutStyle.main}>
        <div className={aboutStyle.wrapper}>
          <div className={aboutStyle.aboutme}>
            <h3 className={aboutStyle.h3} className={aboutStyle.abouth3}>
              ABOUT ME
            </h3>

            <p>Sweet balance of left & right brain.</p>
            <p>
              Autodidact frontend developer with a design eye and top-drawer
              soft skills.
            </p>
            <p>Coach specializing in productivity.</p>
            <p>Keen to learn from seasoned professionals. </p>
            <p>Working remotely since 2013.</p>
          </div>
          <div className={aboutStyle.skillsContainer}>
            <h3 className={aboutStyle.h3}>SKILLS</h3>
            <img
              alt="Javascript"
              title="Javascript"
              className={aboutStyle.logo}
              src="/logos/javascript.svg"
            />
            <img
              alt="React"
              title="React - Javascript Framework"
              className={aboutStyle.logo}
              src="/logos/react.svg"
            />
            <img
              alt="Gatsby"
              title="Gatsby.js - React-based, GraphQL powered, static site generator"
              className={aboutStyle.logo}
              src="/logos/gatsby.svg"
            />
            <img alt="Sass" title="Sass - CSS pre-processor" className={aboutStyle.logo} src="/logos/sass.svg" />
            <img
              alt="Bootstrap"
              title="Bootstrap - CSS Framework"
              className={aboutStyle.logo}
              src="/logos/bootstrap.svg"
            />
            <img alt="Gulp" title="Gulp.js - Javascript toolkit - streaming build system/task runner " className={aboutStyle.logo} src="/logos/gulp.svg" />
            <img
              alt="HTML"
              title="HTML5 - Hypertext Markup Language"
              className={aboutStyle.logo}
              src="/logos/html5.svg"
            />
            <img alt="CSS" title="CSS3 - Cascading Style Sheets" className={aboutStyle.logo} src="/logos/css3.svg" />
            <img alt="Jest" title="Jest - JavaScript Testing Framework" className={aboutStyle.logo} src="/logos/jest.svg" />
            <img
              alt="Puppeteer"
              title="Puppeteer - Open Source Testing Library"
              className={aboutStyle.logo}
              src="/logos/puppeteer.svg"
            />

            <img alt="Git" title="Git - Version Control System" className={aboutStyle.logo} src="/logos/git.svg" />
            <img
              alt="GitHub"
              title="GitHub - Git repository hosting service"
              className={aboutStyle.logo}
              src="/logos/github.svg"
            />
            <img
              alt="Firebase"
              title="Firebase - Google platform for mobile & web apps - Authentication/Database/Storage/Hosting"
              className={aboutStyle.logo}
              src="/logos/firebase.svg"
            />
            <img
              alt="Netlify"
              title="Netlify - Hosting"
              className={aboutStyle.logo}
              src="/logos/netlify.svg"
            />
            <img
              alt="VSCode"
              title="Visual Studio Code - Code Editor"
              className={aboutStyle.logo}
              src="/logos/vscode.svg"
            />
          </div>

          <div className={aboutStyle.contactContainer}>
            <h3 className={aboutStyle.h3}>CONTACT</h3>
            <p>sam@samchillcott.com</p>
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
