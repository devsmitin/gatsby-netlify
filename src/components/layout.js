import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

import "../style/bundle.scss"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page-content">
        <nav>
          {location.pathname === "/" || location.pathname === "/blog/" ? (
            <h1 className="site-title">{data.site.siteMetadata.title}</h1>
          ) : (
            <h2 className="site-title">{data.site.siteMetadata.title}</h2>
          )}
          <ul className="site-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog/">My Blogs</Link>
            </li>
          </ul>
        </nav>

        <main className="page">{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
