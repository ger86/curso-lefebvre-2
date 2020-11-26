import React, {useState, useEffect} from 'react';

// React.ThirdCount.states[0] = {name: 'Gerardo'}

function ThirdCount() {
  const [developer, setDeveloper] = useState({name: 'Gerardo', age: 32});

  function handleClick() {
    setDeveloper({...developer, name: 'Pepito' });
  }

  useEffect(function() {
    console.log(developer);
  }, [developer]);

  return (
    <div>
      <button onClick={handleClick}>Púlsame</button>
    </div>
  );
}

export default ThirdCount;

// Sí: JC, RZ, NC, David, Piecito, Gerardo, Antonio, EU

// No: Gerardo