import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO
      title="Home"
      keywords={[
        `Smit`,
        `Smit Modi`,
        `imsmit`,
        `Front-end`,
        `Developer`,
        `Designer`,
        `Gatsby Developer`,
      ]}
    />
    <div className="container">
      <h2>
        Hello, <del>World</del> Stranger!
      </h2>
    </div>
    <div className="container">
      <Link to="/blog/">Link to my blogs!</Link>
    </div>
  </Layout>
)

export default IndexPage
