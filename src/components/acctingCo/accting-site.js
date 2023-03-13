import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

import FlyerDL1 from "../../images/FAQ.pdf"
import FlyerDL2 from "../../images/ZythorMSDS.pdf"
import FlyerDL3 from "../../images/ZythorSpecimenLabel.pdf"
import FlyerDL4 from "../../images/ZythorPreparation.pdf"
import FlyerDL5 from "../../images/ZythorPreparationSpanish.pdf"

const AcctingSite = () => {
  return (
    <section className="serviceContainer">
      <div>
        <h2 className="title">Got Termites? Let us help you!</h2>
      </div>

      <div className="parallax">
        <div className="overlay">
          <div className="titleBox">
            <h2>Services We Provide</h2>
            <h3>
              Nobody likes having bugs in their home or workplace. Whether you have an infestation that affects your life on a
              daily basis or a seasonal pest problem, you’ll want to call Termibugs Exterminators Inc right away.
            </h3>
				  </div>
          <div className="leftBox">
            <h2>Termibugs Exterminators Inc</h2>
          </div>
          <div className="rightBox">
            <h2>Get in touch with</h2>
            <p>23535 Palomino Dr.#546, Diamond Bar, CA 91765
              <br/>
              Call Us: <a href="tel:+7143217575">(714) 321-7575</a>
              <br/>
              Email Us: <a href="mailto: termite4inspection@gmail.com">termite4inspection@gmail.com</a></p>
          </div>
			  </div>
      </div>

      <div id="fumigationOverview">
        <div className="fumigationLeft">
          <h2>Fumigation Overview</h2>
          <h4>Proven Effectiveness</h4>
          <p>
            The effectiveness of Sulfuryl Fluoride gas fumigant is confirmed by more than 40 years of university research, practical use and published reports.
          </p>
          <h4>Peace-of-Mind Control</h4>
          <p>
            Sulfuryl Fluoride is the only treatment for drywood termites that effectively penetrates the entire structure. It can completely eliminate termites, even in areas not accessible to spot treatments.
          </p>
          <h4>Cost-Effective Option</h4>
          <p>
            Unlike spot treatments which depend on the applicator’s ability to accurately locate and reach each infestation to be successful, fumigation with Sulfuryl Fluoride eliminates all existing infestations throughout the entire structure in one application.
          </p>
          <h4>Effective Control you Can Use with Confidence</h4>
          <p>
            Sulfuryl Fluoride. Effective whole-structure treatment solidly backed by committed representatives, years of research and an array of resources. It’s a treatment you can feel confident about.
          </p>
        </div>

        <div className="fumigationRight">
          <h2>Zythor Downloads</h2>
          <ul>
            <li>
            <FontAwesomeIcon
              className="fontAwesome"
              spin={false}
              size="2x"
              icon={faFilePdf}
            />
              <a target="_blank" href={FlyerDL1}>Frequently Asked Questions</a>
            </li>
            <li>
            <FontAwesomeIcon
              className="fontAwesome"
              spin={false}
              size="2x"
              icon={faFilePdf}
            />
              <a target="_blank" href={FlyerDL2}>Material Safety Data Sheet</a>
            </li>
            <li>
            <FontAwesomeIcon
              className="fontAwesome"
              spin={false}
              size="2x"
              icon={faFilePdf}
            />
              <a target="_blank" href={FlyerDL3}>Specimen Label</a>
            </li>
            <li>
            <FontAwesomeIcon
              className="fontAwesome"
              spin={false}
              size="2x"
              icon={faFilePdf}
            />
              <a target="_blank" href={FlyerDL4}>Fumigation checklist</a>
            </li>
            <li>
            <FontAwesomeIcon
              className="fontAwesome"
              spin={false}
              size="2x"
              icon={faFilePdf}
            />
              <a target="_blank" href={FlyerDL5}>
                PDF Fume Notice</a>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default AcctingSite
