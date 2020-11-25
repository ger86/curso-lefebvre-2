/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

function TwoCounters() {
  const [developer] = useState({name: 'Gerardo'});
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function incrementOtherCount() {
    setOtherCount(otherCount + 1);
  }

  useEffect(function() {
    if (count % 3 === 0 && count !== 0) {
      alert(`El contador es múltiplo de 3 y mi nombre es ${developer.name}`);
    }
  }, [count, developer]);

  return (
    <div>
      <p>Valor actual del contador: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
      <p>Valor actual del otro contador: {otherCount}</p>
      <button onClick={incrementOtherCount}>Incrementar</button>
    </div>
  );
}

export default TwoCounters;
