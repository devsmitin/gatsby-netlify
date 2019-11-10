import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO
      title="Home"
      keywords={[
        `Smit`,
        `Smit Modi`,
        `imsmit`,
        `Front-end Developer`,
        `Gatsby JS Developer`,
      ]}
    />
    <div className="container">
      <h2>Hello, World!</h2>
      <p className="h2">
        I'm Smit Modi, a frontend developer from Ahmedabad, India.
      </p>
      <p className="h3">
        You can read my blogs <Link to="/blog/">here</Link>.
      </p>
    </div>
    <div className="image-wrapper-container">
      <div className="image-wrapper">
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
