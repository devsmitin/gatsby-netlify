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
    <div className="image-container">
      <Image />
    </div>
    <div className="main-container">
      <h2>Hello, World!</h2>
      <p className="h2">My name is Smit Modi</p>
      <p className="h4">
        I am a frontend web developer based in Ahmedabad, India. I love art,
        design, tech, travelling and the Internet.
      </p>
      <h3 className="h4">At this moment:</h3>
      <ul>
        <li>
          I am a full-time Frontend web developer at{" "}
          <b>
            <a href="https://www.lucentinnovation.com/" target="_blank">
              Lucent Innovation
            </a>
          </b>
        </li>
      </ul>
      <h3 className="h4">Some time ago:</h3>
      <ul>
        <li>
          I was a Frontend web developer at a start-up called{" "}
          <b>
            <a href="https://www.wildtigers.space/" target="_blank">
              The WildTigers Technologies
            </a>
          </b>
        </li>
        <li>
          Started my career as a Frontend developer at{" "}
          <b>
            <a href="https://www.multidots.com/" target="_blank">
              Multidots Solutions
            </a>
          </b>
        </li>
      </ul>
      <p className="h4">
        You can read my blogs <Link to="/blog/">here</Link>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
