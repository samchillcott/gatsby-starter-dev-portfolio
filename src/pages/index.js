import React from "react"
import Layout from "../components/Layout"
import "./index.styles.scss"
import portfolioItems from "../components/portfolio-items"

function renderFolio() {
  return portfolioItems.map(
    ({ title, sinopsis, idx, desc, repo, live, img }) => {
      console.log(title)
      return (
        <div key={"div" + idx} className="tab">
          <input key={"index" + idx} type="checkbox" id={idx + title} />
          <label key={"label" + idx} className="tab-label" for={idx + title}>
            {" "}
            <span key={"pTit" + idx} className="folio-title">
              {title}{" "}
            </span>
            <span key={"dot" + idx} className="folio-title">
              ·{" "}
            </span>
            <span key={"pSinop" + idx} className="folio-sinopsis">
              {sinopsis}
            </span>
          </label>
          <div key={"tab" + idx} class="tab-content">
            <img alt="nicasia" src={img} />
            {desc}
            <span className="repolinks" key={"repo" + idx}>
              <a key={"repoLink" + idx} href={repo} target="_blank">
                Github Repo
              </a>
            </span>

            {live ? (
              <span className="repolinks" key={"live" + idx}>
                <a key={"liveLink" + idx} href={live} target="_blank">
                  Live Site
                </a>
              </span>
            ) : null}
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
      <p className="subtitle">Click for GH repo and live version:</p>
      {renderFolio()}
    </Layout>
  )
}

export default Index
