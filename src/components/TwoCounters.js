/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import useCount from 'hooks/useCount';

function TwoCounters() {
  const [developer] = useState({name: 'Gerardo'});
  const [count, increment] = useCount(0);
  const [otherCount, incrementOther] = useCount(0);

  useEffect(function() {
    if (count % 3 === 0 && count !== 0) {
      alert(`El contador es múltiplo de 3 y mi nombre es ${developer.name}`);
    }
  }, [count, developer]);

  return (
    <div>
      <p>Valor actual del contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <p>Valor actual del otro contador: {otherCount}</p>
      <button onClick={incrementOther}>Incrementar</button>
    </div>
  );
}

export default TwoCounters;
