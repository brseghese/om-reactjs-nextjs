import './App.css';
import { useState, useEffect } from 'react';

const eventFunction = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Executa toda vez que o component atualizar');
  });

  useEffect(() => {
    console.log('Executa uma vez');
  }, []);

  useEffect(() => {
    console.log('Executa toda vez que a dependência atualizar');
  }, [counter]);

  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFunction);

    return () => {
      console.log('Esse retorno faz a limpeza removendo o evento');
      document.querySelector('h1').removeEventListener('click', eventFunction);
    };
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
