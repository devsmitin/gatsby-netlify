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
    <h2>Hello World!</h2>
    <Link to="/blog/">Link to my blogs!</Link>
  </Layout>
)

export default IndexPage
