import { useState } from 'react';
import './App.css';
import Overlays from './components/Overlays';
import { ModalContext } from './context/ModalContext';

function App() {  
    const [showModal, setShowModal] = useState(false)
  return (
    <div className="App">
      <ModalContext.Provider value={{showModal, setShowModal}}>
        <Overlays />

        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </ModalContext.Provider>
    </div>
  );

}

export default App;
