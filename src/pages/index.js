import React from "react"
import Layout from "../components/layouts/site-layout"
import BackgroundTitle from "../components/background-image/background-title"
import IntroductionText from "../components/landing-page/introduction-text"
import ThreeByTwo from "../components/landing-page/3by2rows"
import Statement from "../components/landing-page/statementStyle2"
import ServiceArea from "../components/landing-page/serviceArea"
import QandA from "../components/landing-page/QandA"

import "./styles/global.scss"

export default () => (
  <Layout>
    <BackgroundTitle />
    <IntroductionText />
    <ServiceArea />
    <ThreeByTwo />
    <Statement />
    <QandA />
  </Layout>
)
