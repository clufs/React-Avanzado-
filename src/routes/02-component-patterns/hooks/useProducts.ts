import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = ( value: number ) => {
    setCounter( prev => Math.max( prev + value, 0 ) ); //esta funcion de math es para que cuando se sume no baje a -1 ,-2 etc
  }

  return {increaseBy, counter};
}