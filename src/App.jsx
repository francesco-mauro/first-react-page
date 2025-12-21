// Importa l'hook useState da React.
// useState permette di aggiungere e gestire uno "stato" nei componenti funzione.
// Quando lo stato cambia, il componente viene ri-renderizzato con i nuovi dati.
import {useState} from 'react';

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
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    //Selecteed button should be a string "components", "jsx", "props", "state"
    //selectedButton => "components", "jsx", "props", "state"
    setSelectedTopic(selectedButton);
    console.log("selected button:", selectedTopic);

  }

  console.log("APP COMPONENT RENDERING");
  


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}> Components </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}> JSX </TabButton>
            <TabButton onSelect={() => handleSelect("props")}> Props </TabButton>
            <TabButton onSelect={() => handleSelect("state")}> State </TabButton>
          </menu>
          <div id="tab-content"> 
            <h3> {EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}  
              </code>
            </pre>
          </div>
          {selectedTopic}

        </section>

      </main>
    </div>
  );
}

export default App;