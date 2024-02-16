import { useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';
import { Morpion } from './Components/Morpion';
import Launcher from './Components/Launcher/Launcher';
import { Header } from './Components/Header';


export const INITIAL_OPTIONS = {
    player1: {
      color: null,
      symbol: null
  },
  player2: {
      color: null,
      symbol: null
  }   
}

function App() {

  const [started, setStarted] = useState(false);
  const [options, setOptions] = useState(INITIAL_OPTIONS);

  const handleStart = () => {
    setStarted(true);
  };
  const handleStop = () => {
    setStarted(false);
    setOptions(INITIAL_OPTIONS);
  };

  return (
    <div className="App">
        <Header options={options} />
        <div className="container center-content">
          <Morpion started={started} stop={handleStop} options={options} />
          {
            !started && 
            createPortal(
              <Launcher onStart={handleStart} options={options} setOptions={setOptions} />,
              document.body
            )
          }
        </div>
    </div>
  );
}

export default App;

