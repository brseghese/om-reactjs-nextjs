import { useEffect, useRef, useState } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  console.log('Renderizou');

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + increment);
        }}
      >
        +{increment}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - increment);
        }}
      >
        -{increment}
      </button>
      <input
        type="number"
        value={increment}
        onChange={(e) => setIncrement(Number(e.target.value))}
      />
    </div>
  );
}

export default App;
