import React from 'react'

import Estimation from "../../images/calculator.svg"
import House from "../../images/house.svg"
import GroupOfPeople from "../../images/groupOfPeople.svg"


const ThreeByTwoContainer = () => {

    return (
        <div className="Threeby2container">
            <div>
			    <img src={Estimation} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>Professional Termite Inspection</h3>
            </div>
            <div>
                <img src={GroupOfPeople} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>Schedule Your Inspection</h3>
            </div>
            <div>
			    <img src={House} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>Occupant Notice</h3>
                <p>
                    Homeowner, tenant or neighbors should sign it.
                </p>
            </div>
        </div>
    )
}

export default ThreeByTwoContainer