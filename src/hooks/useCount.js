import {useState} from 'react';

export default function useCount(initialValue) {
  const [count, setCount] = useState(initialValue);

  function incrementCount() {
    setCount(count + 1);
  }

  return [count, incrementCount];
}