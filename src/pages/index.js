import React from "react"
import Layout from "../components/Layout"
import "./index.styles.scss"
import portfolioItems from "../components/portfolio-items"

function renderFolio() {
  return portfolioItems.map(
    ({ title, idx, desc, tech, repo, live, img, readme }) => {
      return (
        <div key={"div" + idx}>
          {/* <input key={"index" + idx} type="checkbox" id={idx + title} />
          <label key={"label" + idx} className="tab-label" for={idx + title}>
            {" "} */}
          <div className="projectWrapper">
            <span key={"pTit" + idx} className="folio-title">
              {title}
            </span>
            {/* <span key={"dot" + idx} className="folio-title">
            {" "}
          </span> */}
            {/* <span key={"pSinop" + idx} className="folio-sinopsis">
            {sinopsis}
          </span> */}
            {/* </label> */}
            <div key={"tab" + idx} class="tab-content">
              <img src={img} />
              <div className="desc">
                {desc}
                <br></br>
                <br></br>
                {tech}
              </div>
              {/* <div className="repolinks" key={"repo" + idx}> */}
              <div className="repolinks">
                {/* <div className="repolinks" key={"live" + idx}> */}

                <a key={"liveLink" + idx} href={live} target="_blank">
                  {/* <a href={live} target="_blank"> */}
                  <i class="fa fa-desktop" aria-hidden="true"></i>
                  Live Site
                </a>

                <a key={"readmeLink" + idx} href={readme} target="_blank">
                  <i className="fab fa-readme" aria-hidden="true"></i>
                  Project Notes & Learnings
                </a>

                <a key={idx} href={repo} target="_blank">
                  <i className="fa fa-code" aria-hidden="true"></i>
                  Source Code
                </a>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      )
    }
  )
}

const Index = () => {
  return (
    <Layout>
      {/* <h1 className="opener">Projects</h1> */}
      {/* <p className="subtitle">Click for GitHub repo and live version:</p> */}
      <div className="projectsWrapper">{renderFolio()}</div>
    </Layout>
  )
}

export default Index
