import React from "react"
import Header from "./Header"

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="content-main">{props.children}</div>
    </div>
  )
}

export default Layout
