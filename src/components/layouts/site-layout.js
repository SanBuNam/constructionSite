import React from "react"
import Header from "../header.js"
import Footer from "../footers/footer.js"

export default ({ children }) => (
  <div className="site-layout">
    <Header />
      <div className="content">{children}</div>
    <Footer />
  </div>
)
