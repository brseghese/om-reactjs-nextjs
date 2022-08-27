import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClickReverse = () => {
    setReverse((reverse) => !reverse);
  };

  const handleClickIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>
          <button onClick={handleClickReverse}>Reverse</button>
          <button onClick={handleClickIncrement}>Increment {counter}</button>
        </p>
      </header>
    </div>
  );
}

export default App;
