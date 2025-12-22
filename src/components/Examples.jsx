import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';


export default function Examples() {

  // Crea una variabile di stato "selectedTopic" e la funzione per aggiornarla "setSelectedTopic".
  // Il valore iniziale è "Please click a button!". Quando chiami setSelectedTopic, React aggiorna lo stato e ri-renderizza il componente.
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    //Selecteed button should be a string "components", "jsx", "props", "state"
    //selectedButton => "components", "jsx", "props", "state"
    setSelectedTopic(selectedButton);
    console.log("selected button:", selectedTopic);

  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3> {EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }

    return (
        <Section title="Examples" id='examples'>
            <menu>
                <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}> Components </TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}> JSX </TabButton>
                <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}> Props </TabButton>
                <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}> State </TabButton>
            </menu>
            {/* Approch 1 to dynamic statements */}
            {/* {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
            <h3> {EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>    
          </div>} */}

            {/* Approch 2 to dynamic statements */}
            {/* {selectedTopic ? <div id="tab-content">
            <h3> {EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> : null}  */}

            {/* Approch 3 to dynamic statements */}
            {tabContent}

        </Section>)
}