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
        {/* <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}>
            {" "}
            <Img
              className={aboutStyle.img}
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
          <div className={aboutStyle.texto}>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-map-marker-alt fa-sm"></i>
              <p>Location, Country</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-graduation-cap fa-sm"></i>
              <p>University of life</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-code fa-sm"></i>
              <p>HTML, JS, CSS, noSQL</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-language fa-sm"></i>
              <p>English, Spanish, Portuguese and Latin</p>
            </div>
          </div>
        </div> */}
        <div className={aboutStyle.derecha}>
          <p>
            Healthy float waves wrap gnarley Trestles oil water indy? Clamped
            blonde rigs capped out socked in, blown out fresh stick healthy
            float stall, waves Taj Burrow. Fan a spray foam ball clamped rip the
            pit shacked priority frothy top dry hair paddle out insider.
          </p>
          <p>
            Oil barreling, carve crumbly lip in the bricks white water sand bar
            fighting for the peak. Twin fin freshie reef urll make the paddle
            layback hammer blonde rigs slob priority. Drifting the tail rinsed
            salt water pit above the lip. Stab mag, double up nice little fish
            kook legend J.O.B. rock-n-roll socked in.
          </p>

          <div className={aboutStyle.logoContainer}>
            <p>Skills</p>
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
            <img
              alt="Git"
              className={aboutStyle.logo}
              src="./logos/git.svg"
            />
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
            <p>Contact Me</p>
            <a
              className={aboutStyle.social}
              href="https://e-mailer.link/100116626233"
              target="_blank"
            >
              <i className="fa fa-envelope"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="https://www.instagram.com/samchillcott/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
