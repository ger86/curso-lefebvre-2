import {useCallback, useMemo, useState} from 'react';

export default function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(function() {
    setCount(count => count + 1); 
  }, [setCount]);

  const developer = useMemo(function() {
    return {name: 'Gerardo'};
  }, []);

  return [count, increment, developer];
}