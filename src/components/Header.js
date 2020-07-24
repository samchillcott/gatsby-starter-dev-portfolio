import React from "react"
import "./header.styles.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sam Chillcott Portfolio</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <link
        href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous"
      />

      <div className="header-main">
        <div className="dev">
          <h1>{data.site.siteMetadata.title}</h1>
        </div>
        <div className="icons">
          <a href="https://github.com/samchillcott" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/samchillcott/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/samchillcott/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <span className="pages-link">
          <Link to="/">PORTFOLIO</Link>|<Link to="/about">ABOUT</Link>|
          <a
            href="https://drive.google.com/file/d/1Bpx3ihgjBD5RffO1CWyY91xph5WPsG2h/view?usp=sharing"
            target="_blank"
          >
            RESUME
          </a>
        </span>

        <hr />
      </div>
    </div>
  )
}

export default Header
