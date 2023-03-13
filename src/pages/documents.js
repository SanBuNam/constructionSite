import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

import FumeBagInstruction from "../images/downloads/FumeBagInstruction.pdf"
import FumeCheckList_kr from "../images/downloads/FumeCheckList_kr.pdf"
import FumechecklistTermiBugsNew from "../images/downloads/FumechecklistTermiBugsNew.pdf"
import FumeDelayTermibugs from "../images/downloads/FumeDelayTermibugs.pdf"
import NoticeForFumeTermibugs from "../images/downloads/NoticeForFumeTermibugs-Eng.pdf"
import Occupantnotice from "../images/downloads/Occupantnotice.pdf"
import Layout from "../components/layouts/site-layout"

export default () => (
  <Layout>
    <section id="documents">
      <div className="documents--library">
        <h2>Documents Download</h2>
        <div className="documents--library__inner">
          <div className="documents--library__inner--one">
            <a target="_blank" href={FumeBagInstruction}>
              <div>
                <FontAwesomeIcon
                className="fontAwesome"
                spin={false}
                size="2x"
                icon={faFilePdf}
                />
              </div>
              <div>
                Fume Bag Instruction
              </div>
            </a>
          </div>

          <div className="documents--library__inner--two">
            <a target="_blank" href={FumeCheckList_kr}>
              <div>
                <FontAwesomeIcon
                className="fontAwesome"
                spin={false}
                size="2x"
                icon={faFilePdf}
                />
              </div>
              <div>
                Fume CheckList (한국어)
              </div>
            </a>
          </div>

          <div className="documents--library__inner--three">
            <a target="_blank" href={FumechecklistTermiBugsNew}>
              <div>
                <FontAwesomeIcon
                className="fontAwesome"
                spin={false}
                size="2x"
                icon={faFilePdf}
                />
              </div>
              <div>
                Fume CheckList TermiBugs
              </div>
            </a>
          </div>

          <div className="documents--library__inner--four">
            <a target="_blank" href={FumeDelayTermibugs}>
              <div>
                <FontAwesomeIcon
                className="fontAwesome"
                spin={false}
                size="2x"
                icon={faFilePdf}
                />
              </div>
              <div>
                Fume Delay Termibugs
              </div>
            </a>
          </div>

          <div className="documents--library__inner--five">
            <a target="_blank" href={NoticeForFumeTermibugs}>
              <div>
                <FontAwesomeIcon
                className="fontAwesome"
                spin={false}
                size="2x"
                icon={faFilePdf}
                />
              </div>
              <div>
                Notice For Fume Termibugs
              </div>
            </a>
          </div>

          <div className="documents--library__inner--six">
            <a target="_blank" href={Occupantnotice}>
              <div>
                <FontAwesomeIcon
                className="fontAwesome"
                spin={false}
                size="2x"
                icon={faFilePdf}
                />
              </div>
              <div>
                Occupant Notice
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  </Layout>
)
