import React from "react"
import { Link } from "gatsby"

export default () => (
  <footer className="footerContainer">
    <div className="innerContainer">
      <div className="leftContainer">
        <h3>Termibugs Exterminators Inc.</h3>
        <p>
          23535 Palomino Dr.#546, Diamond Bar, CA 91765
        </p>
        <h3>Learn more about Us</h3>
        <Link to="/services">Services</Link>
        <br />
        <Link to="/about">About Us</Link>
        <br />
        <Link to="/contact">Contact Us</Link>
        <br />
        <Link to="/">
          <p>© {new Date().getFullYear()}, Termibugs Exterminators Inc.</p>
        </Link>
      </div>

      <div className="rightContainer">
        <div>
          <h3>Get in touch</h3>
          <p>
            Termibugs Exterminators Inc. is available seven days a week to address your pest control needs. Our client representatives can discuss your situation, answer your questions and address your concerns anytime, 24 hours a day.
            Our office hours are 7:00am to 12:00am on weekdays and 9:00am to 7:00pm on weekends.
          </p>
          <p>
            Get in touch via <Link to="/contact">my contact form</Link> or send
            me an email <a href = "mailto: termite4inspection@gmail.com">termite4inspection@gmail.com</a>
          </p>
          <p>
            Call us on <a href="tel:+7143217575">(714) 321-7575</a>
          </p>
          <p>
            23535 Palomino Dr.#546, Diamond Bar, CA 91765        
          </p>
        </div>
      </div>
    </div>
  </footer>
)
