import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Blog = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO 
        title="Posts"
        location={location}
      />
      <div className="image-container">
        <Image />
      </div>
      <section className="main-container">
        <header className="page-header hide-mobile">
          <h1 className="page-title">Blogs</h1>
          <hr />
        </header>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className="post-card">
              <h3 className="post-link">
                <Link to={`blog${node.fields.slug}`} className="abs-link">
                  {title}
                </Link>
              </h3>
              <small className="post-date">{node.frontmatter.date}</small>
              <p
                className="post-desc"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
