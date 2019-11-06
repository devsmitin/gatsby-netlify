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
          {location.pathname === "/" ? (
            <h1 className="site-title">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
          ) : (
            <h2 className="site-title">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h2>
          )}
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
