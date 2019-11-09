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
      <h2>Hello, World!</h2>
      <p className="h2">
        I'm Smit Modi, a frontend developer from Ahmedabad, India.
      </p>
    </div>
    <div className="container">
      <Link to="/blog/">Link to my blogs!</Link>
    </div>
  </Layout>
)

export default IndexPage
