import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { state } = theContext;
  return (
    <h1>
      {state.title} {state.counter}
    </h1>
  );
};
