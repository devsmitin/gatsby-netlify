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
      <main className="page">
        <header className="header">
          <div className="container">
            {location.pathname === "/" ? (
              <h1 className="site-title">
                <Link to="/">{data.site.siteMetadata.title}</Link>
              </h1>
            ) : (
              <h2 className="site-title decorated">
                <Link to="/">{data.site.siteMetadata.title}</Link>
              </h2>
            )}
          </div>
        </header>

        <div className="page-content">{children}</div>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
