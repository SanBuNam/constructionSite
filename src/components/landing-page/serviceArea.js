import React from "react"
import ServiceArea from "../../images/serviceArea.jpg"
import PrNumber from "../../images/prNumber.png"

const Statement = () => (
  <div className="serviceAreaContainer">
    <div className="serviceAreaLeft">
      <div>
        <div className="serviceAreaLeft--inner">
          <h4>
            We Serve The Following 
            <br />
            <br />
            Southern California Areas
          </h4>
          <img src={PrNumber} />
        </div>
        <p>
            Termibugs Exterminators Inc. has spent years perfecting our pest control service, 
            treating your home with the same respect you would.
          </p>

      </div>
      
      <ul>
        <li>Riverside County</li>
        <li>San Bernardino County</li>
        <li>Orange County</li>
        <li>Los Angeles County</li>
      </ul>
    </div>
    <div className="serviceAreaRight">
      <img src={ServiceArea} />
    </div>
  </div>
)

export default Statement
