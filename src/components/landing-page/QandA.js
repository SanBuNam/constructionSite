import { Collapse } from "react-collapse"
import React, {useState, setState} from "react"


const QandA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  return (
    <div id="QandAContainer">
        <div class="QandAbutton" onClick={() => setIsOpen(!isOpen)}>
          <h5>
            What is the fumigation process?
          </h5>
          <Collapse isOpened={isOpen}>
            <p>
              The fumigation process usually takes 24 to 48 hours. Termibugs Exterminators Inc. covers your home with tarps, prepares the interior, seals the tarps, and releases a warning agent into the home. The Sulfuryl Fluoride is introduced into the structure. Termibugs Exterminators Inc. will carefully calculate the amount of Sulfuryl Fluoride, based on a variety of factors including the target pest, temperature and size of the home. After the fumigation is complete, your licensed fumigator clears the fumigant from the structure following label instructions, and confirms clearance with sensitive monitoring equipment.
            </p>
          </Collapse>
        </div>
        <div class="QandAbutton" onClick={() => setIsOpen1(!isOpen1)}>
          <h5>
            What do I need to do to prepare for fumigation?
          </h5>
          <Collapse  isOpened={isOpen1}>
            <p>
              You will receive detailed information and a step-by-step checklist in order to allow you to prepare for your fumigation. As a homeowner, some of your preparation steps will include: watering soil and cutting back foliage at least 18 inches from the home; ensuring all people, plants and pets are out of the structure and making overnight arrangements for your family and pets. For a complete list of instructions download the Occupants Fact Sheet and Fumigation Preparation Checklist.
            </p>
          </Collapse>
        </div>
        <div class="QandAbutton" onClick={() => setIsOpen2(!isOpen2)}>
          <h5>
            What is Sulfuryl Fluoride gas fumigant?
          </h5>
          <Collapse  isOpened={isOpen2}>
            <p>
              Sulfuryl Fluoride is a colorless, odorless gas that quickly penetrates structural materials during fumigation. It is non-staining, non-corrosive and non-flammable. Sulfuryl Fluoride quickly dissipates from the structure into the atmosphere and does not deplete the ozone.
            </p>
          </Collapse>
        </div>
        <div class="QandAbutton" onClick={() => setIsOpen3(!isOpen3)}>
          <h5>
            Does Sulfuryl Fluoride leave any residues?
          </h5>
          <Collapse  isOpened={isOpen3}>
            <p>
              Unlike other treatment options, Sulfuryl Fluoride does not remain in the home after fumigation. It completely dissipates, leaving no surface residues behind. So with Sulfuryl Fluoride, you don't need to wash your dishes, linens, clothing and other items after fumigation.
            </p>
          </Collapse>
        </div>
        <div class="QandAbutton" onClick={() => setIsOpen4(!isOpen4)}>
          <h5>
            Does Sulfuryl Fluoride cause damage?
          </h5>
          <Collapse  isOpened={isOpen4}>
            <p>
              Sulfuryl Fluoride does not react with most materials. It is highly unlikely to cause damage to structures or their contents when properly applied by a trained fumigator.
            </p>
          </Collapse>
        </div>
        <div class="QandAbutton" onClick={() => setIsOpen5(!isOpen5)}>
          <h5>
            What precautions are taken to ensure my family's safety?
          </h5>
          <Collapse  isOpened={isOpen5}>
            <div>
              <ul>
                <li>
                  Release the warning agent to deter entry to the home.
                </li>
                <li>
                  Secure doors on your home with additional locking devices to prevent unauthorized entry.
                </li>
                <li>
                  Use sophisticated equipment to ensure that Sulfuryl Fluoride has dissipated, so you may re-enter your home.
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
        <div class="QandAbutton" onClick={() => setIsOpen6(!isOpen6)}>
          <h5>
            What items need to be removed from my house for the fumigation?
          </h5>
          <Collapse  isOpened={isOpen6}>
            <p>
              Living plants and animals should be removed from the structure. Food, feed, and medicinals (anything that could be ingested) should be removed or double-bagged in Nylofume* bags. This includes medicines, food, drink, toothpaste and wine bottles in which the cork is showing. If the item is an unopened, airtight can or bottle, you may leave it in the house during fumigation.
              Plastic covered mattresses, pillows, etc. also should be removed. This is because the plastic cover will slow aeration of the fumigant. Filled waterbeds need not be removed.
            </p>
          </Collapse>
        </div>
        <div class="QandAbutton" onClick={() => setIsOpen7(!isOpen7)}>
          <h5>
            Does Sulfuryl Fluoride cause corrosion or other damage?
          </h5>
          <Collapse  isOpened={isOpen7}>
            <p>
              Sulfuryl fluoride in the gaseous state does not react with most materials and thus is highly unlikely to cause damage to structures or their contents when properly applied. Plastic covered mattresses, pillows, etc. also should be removed. This is because the plastic cover will slow aeration of the fumigant. Filled waterbeds need not be removed.
            </p>
          </Collapse>
        </div>
    </div>
  )
}

export default QandA
