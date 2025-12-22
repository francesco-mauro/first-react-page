// Importa gli hook useState e Fragment da React.
// useState permette di aggiungere e gestire uno "stato" nei componenti funzione.
// Quando lo stato cambia, il componente viene ri-renderizzato con i nuovi dati.
// Fragment permette di raggruppare più elementi JSX senza aggiungere nodi extra al DOM.
// Utile quando vuoi restituire più elementi da un componente senza usare un <div> o altro elemento HTML.
import { useState } from 'react';

// Immmage import statement
import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
// import { Header } from './components/Header';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from './data';


function App() {
  // Crea una variabile di stato "selectedTopic" e la funzione per aggiornarla "setSelectedTopic".
  // Il valore iniziale è "Please click a button!". Quando chiami setSelectedTopic, React aggiorna lo stato e ri-renderizza il componente.
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    //Selecteed button should be a string "components", "jsx", "props", "state"
    //selectedButton => "components", "jsx", "props", "state"
    setSelectedTopic(selectedButton);
    console.log("selected button:", selectedTopic);

  }

  console.log("APP COMPONENT RENDERING");

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
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}> Components </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}> JSX </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}> Props </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}> State </TabButton>
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




        </section>

      </main>
    </>
  );
}

export default App;