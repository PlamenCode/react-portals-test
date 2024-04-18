import { useContext } from 'react';
import './App.css';
import Overlays from './components/Overlays';
import { ModalContext } from './context/ModalContext';

function App() {  
  const { setShowModal } = useContext(ModalContext);
  return (
    <div className="App">
        <Overlays />

        <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
  );

}

export default App;
