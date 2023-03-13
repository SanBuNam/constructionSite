import React from "react"

const ContactInfo = () => {
  return (
    <div className="contactInfoContainer">
      <h2>Contact Information</h2>
      <br />
      <div className="phone">
        <p>
          If you have an urgent enquiry please feel free to leave a voice mail,
          text me on{" "}
          <a href="tel:+9098024485">
            <span>(909) 802-4485</span>
          </a>{" "}
          or send me message using the form and I will do my best to get back to
          you as soon as possible.
        </p>
        <hr width="100%" />
      </div>
      <div>
        <h3>Contact details</h3>
        <p>
          Contact number: <a href="tel:+9098024485">(909) 802-4485</a>
          <br />
          <br />
          Email:{" "}
          <a href="mailto: termite4inspection@gmail.com">termite4inspection@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default ContactInfo
