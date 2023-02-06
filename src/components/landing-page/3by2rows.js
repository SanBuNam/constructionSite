import React from 'react'

import Estimation from "../../images/calculator.svg"
import House from "../../images/house.svg"
import GroupOfPeople from "../../images/groupOfPeople.svg"


const ThreeByTwoContainer = () => {

    return (
        <div className="Threeby2container">
            <div>
			    <img src={Estimation} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>Free Home Inspections</h3>
                <p>
                    At the core of Termibugs Exterminators Inc. is our customers. When you call on us for pest treatment, we will do whatever we can to ensure your home is safe and pest-free. One of the most important parts of our process is our thorough 20-point inspection, which we provide at no charge to you.
                </p>
            </div>
            <div>
                <img src={GroupOfPeople} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>SCHEDULE YOUR PEST CONTROL</h3>
                <p>
                    When you hire Termibugs Exterminators Pest Control for pest control services, you get 48-hour guarantees, complimentary 20 point inspections, four season protection, free re-services when necessary, and unparalleled customer service.
                </p>
            </div>
            <div>
			    <img src={House} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>FREE RE-SERVICE</h3>
                <p>
                    You deserve to feel safe and comfortable in your home. While our year-round treatments are incredibly effective, sometimes pests still manage to make their way onto your property.
                </p>
            </div>
        </div>
    )
}

export default ThreeByTwoContainer