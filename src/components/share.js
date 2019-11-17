import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import facebookIcon from "../images/icon-facebook.svg"
import twittweIcon from "../images/icon-twitter.svg"

const Share = ({ shareTitle, location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )
  const link = site.siteMetadata.siteUrl + location.pathname
  const title = shareTitle ? shareTitle : `This post is awesome`
  const handle = site.siteMetadata.social.twitter
  const via = `&via=` + handle
  const facebook_link = `https://www.facebook.com/sharer/sharer.php?u=` + link
  const twitter_link =
    `https://twitter.com/intent/tweet?url=` + link + `&text=` + title

  return (
    <div className="social-share-widget">
      <span>Share this post:</span>
      <ul className="social-share-list">
        <li>
          <a href={facebook_link} title="Share on Facebook" target="_blank">
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="social-share-icon"
            />
          </a>
        </li>

        <li>
          <a
            href={handle ? twitter_link + via : twitter_link}
            title="Share on Twitter"
            target="_blank"
          >
            <img
              src={twittweIcon}
              alt="twitter icon"
              className="social-share-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Share