import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article>
        <header>
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav>
        <ul className="blog-nav">
          {previous && (
            <li className="">
              <Link to={"blog" + previous.fields.slug} rel="prev">
                Previous Post: {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li className="">
              <Link to={"blog" + next.fields.slug} rel="next">
                Next Post: {next.frontmatter.title}
              </Link>
            </li>
          )}
          <li className="">
            <Link to="/blog/" rel="back">
              All posts
            </Link>
          </li>
        </ul>
      </nav>
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
