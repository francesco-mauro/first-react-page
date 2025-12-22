// Importa gli hook useState e Fragment da React.
// useState permette di aggiungere e gestire uno "stato" nei componenti funzione.
// Quando lo stato cambia, il componente viene ri-renderizzato con i nuovi dati.
// Fragment permette di raggruppare più elementi JSX senza aggiungere nodi extra al DOM.
// Utile quando vuoi restituire più elementi da un componente senza usare un <div> o altro elemento HTML.

// Immmage import statement

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';



function App() {


  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />


      </main>
    </>
  );
}

export default App;