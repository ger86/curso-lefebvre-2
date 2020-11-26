import {useCallback, useState} from 'react';

export default function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(function() {
    setCount(count => count + 1); 
  }, [setCount]);

  function noMemoizedIncrement() {
    setCount(count => count + 1); 
  }

  return [count, increment, noMemoizedIncrement];
}