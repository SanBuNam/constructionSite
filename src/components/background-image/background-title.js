import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const imageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "main-banner-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BackgroundSection = ({ backgroundStyle }) => (
  <StaticQuery
    query={imageQuery}
    render={data => {
      const imageSharp = data.desktop.childImageSharp.fluid

      return (
        <div
          Tag="section"
          className={backgroundStyle}
          fluid={imageSharp}
        >
          <div className="BgTitleContainer">
            <div className="innerContainer">
              <h1>
                 TERMIBUGS EXTERMINATORS INC.
                <br />
                <p className="subtitle">
                  Your Friendly Neighborhood
                  Termite Company
                  We Fumigate Termites and Pests for residential, commercial, government and industrial customers. 
                </p>
              </h1>
              <a href="/services">LEARN MORE</a>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  background-size: center;
`

export default StyledBackgroundSection
