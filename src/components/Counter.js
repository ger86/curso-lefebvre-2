import {useEffect, useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function() {
    if (count % 3 === 0 && count !== 0) {
      alert('Múltiplo de 3');
    }
  });

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div style={{marginTop: '200px'}}>
      <p>Valor actual del contador: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default Counter;
