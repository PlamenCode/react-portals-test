import { useState } from 'react';
import './App.css';

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
