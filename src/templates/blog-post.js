import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/share"

import prevGraphic from "../images/icon-prev.svg"
import nextGraphic from "../images/icon-next.svg"
import listGraphic from "../images/icon-list-square.svg"
import homeGraphic from "../images/icon-home.svg"

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt || post.frontmatter.description}
      />
      <div className="container">
        <article className="post-wrapper">
          <header>
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div>
              <Share location={location} shareTitle={post.frontmatter.title} />
            </div>
          </header>
          <hr />
          <section
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <nav className="post-nav">
          <ul className="post-nav-list">
            <li className="posts-share show-mobile">
              <Link to="/" rel="home" title="Home" aria-label="Home">
                <img src={homeGraphic} alt="Home" className="nav-icon" />
              </Link>
            </li>

            <li className="posts-all">
              <Link
                to={"/blog/"}
                rel="All posts"
                title="All posts"
                aria-label="All posts"
              >
                <img src={listGraphic} alt="All posts" className="nav-icon" />
              </Link>
            </li>

            {previous ? (
              <li className="posts-prev">
                <Link
                  to={"blog" + previous.fields.slug}
                  rel="prev"
                  title={"Previous Post: " + previous.frontmatter.title}
                  aria-label={"Previous Post: " + previous.frontmatter.title}
                >
                  <img src={prevGraphic} alt="Previous" className="nav-icon" />
                </Link>
              </li>
            ) : (
              <li className="posts-prev disabled">
                <span aria-label="No Previous Post">
                  <img src={prevGraphic} alt="Previous" className="nav-icon" />
                </span>
              </li>
            )}

            {next ? (
              <li className="posts-next">
                <Link
                  to={"blog" + next.fields.slug}
                  rel="next"
                  title={"Next Post: " + next.frontmatter.title}
                  aria-label={"Next Post: " + next.frontmatter.title}
                >
                  <img src={nextGraphic} alt="Next" className="nav-icon" />
                </Link>
              </li>
            ) : (
              <li className="posts-next disabled">
                <span aria-label="No Next Post">
                  <img src={nextGraphic} alt="Next" className="nav-icon" />
                </span>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
