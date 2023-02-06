import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <div className="navigationContainer">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="/#stateStyle2container">Common Q & A</a>
      </li>
      <li>
      <Link to="/services">Fumigation Overview</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
