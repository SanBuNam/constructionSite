import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Image from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        fixed: file(relativePath: { eq: "TermiteLogo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header className="headerContainer">
        <div className="rowLeft">
          <Link to="/">
            <Image fixed={data.fixed.childImageSharp.fixed} />
          </Link>
        </div>
        <Navbar />
      </header>
    )}
  />
)
