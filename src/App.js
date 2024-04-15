import { useState } from 'react';
import './App.css';
import Overlays from './components/Overlays';

function App() {  
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Overlays showModal={showModal} setShowModal={setShowModal} />

      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
    </div>
  );

}

export default App;
