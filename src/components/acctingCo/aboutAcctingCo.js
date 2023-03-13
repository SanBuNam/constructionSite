import React from "react"
import serviceImg1 from "../../images/constructionBg2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationArrow,
  faEnvelope,
  faFax,
} from "@fortawesome/free-solid-svg-icons"

export default () => (
  <section className="aboutAcctingContainer">
    <div className="titleDiv">
      <h1>ABOUT US</h1>
      <div className="imgDiv">
        <div className="imgDiv2">
          <h2>Termibugs Exterminators Inc. Overview</h2>
          <p>
            Our team is made up of the best of the best, and all of our technicians are carefully screened, undergoing background checks and extensive training regimens. We also always arrive on time and in uniform, so you can trust that your property is in the best of hands. For the ultimate peace of mind, we start every service with a free quote, and then work with you to learn about the nature of your infestation, before developing a custom-made treatment plan and getting to work to rid your home or business of pests. We even offer our honest recommendations, based on our years of industry knowledge, to prevent future infestations from occurring.
          </p>
        </div>
        <div>
          <img src={serviceImg1} />
        </div>
      </div>
     
      <hr />

    <div className="bottomRow">
      <div className="inner">
        <FontAwesomeIcon
          className="fontAwesome"
          spin={false}
          size="5x"
          icon={faLocationArrow}
        />
        <h4>
          Address
        </h4>
        <p>
          23535 Palomino Dr.#546, Diamond Bar,<br/> CA 91765
        </p>
      </div>
      <div className="inner">
        <FontAwesomeIcon
          className="fontAwesome"
          spin={false}
          size="5x"
          icon={faEnvelope}
        />
        <h4>
          Email
        </h4>
        <p>
          termite4inspection@gmail.com
        </p>
      </div>

      <div className="inner">
        <FontAwesomeIcon
          className="fontAwesome"
          spin={false}
          size="5x"
          icon={faFax}
        />
        <h4>
          Phone
        </h4>
        <p>
          (909) 802-4485
        </p>
        </div>
      </div>
    </div>
    <div className="ggMap">
      <h2>
      Termibugs Exterminators Inc. is located 
      <br/>
      at 23535 Palomino Dr.#546, Diamond Bar, CA 91765
      </h2>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.808391149358!2d-117.81227094877492!3d34.02312898051881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32c685044d8d5%3A0xf78e1a766e233be4!2s23535%20Palomino%20Dr%20%23546%2C%20Diamond%20Bar%2C%20CA%2091765!5e0!3m2!1sen!2sus!4v1675020343551!5m2!1sen!2sus"
              width="800"
              height="550"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
      </div>
    
  </section>
)
