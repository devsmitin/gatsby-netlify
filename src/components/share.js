import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import fbIcon from "../images/icon-facebook.svg"
import twitIcon from "../images/icon-twitter.svg"

const Share = ({ shareTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
            }
          }
        }
      }
    `
  )
  const link = window.location.href
  const title = shareTitle ? shareTitle : `This post is awesome`
  const handle = site.siteMetadata.social.twitter
  const via = `&via=` + handle
  const fb_link = `https://www.facebook.com/sharer/sharer.php?u=` + link
  const twitter_link =
    `https://twitter.com/intent/tweet?url=` + link + `&text=` + title

  return (
    <ul className="social-share-list">
      <li>
        <a href={fb_link} title="Share on Facebook" target="_blank">
          <img src={fbIcon} alt="facebook icon" className="social-share-icon" />
        </a>
      </li>

      <li>
        <a
          href={handle ? twitter_link + via : twitter_link}
          title="Share on Twitter"
          target="_blank"
        >
          <img
            src={twitIcon}
            alt="twitter icon"
            className="social-share-icon"
          />
        </a>
      </li>
    </ul>
  )
}

export default Share
