import './App.css';
import P from 'prop-types';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Button = ({ incrementButton }) => {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizou');

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
