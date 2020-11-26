import React, {useEffect} from 'react';
import useCount from 'hooks/useCount';


function UsersAndCount() {
  const [count, increment, developer] = useCount(0);

  console.log('render');
  useEffect(function() {
    async function fetchData() {
      if (count < 4) {
        const response = await fetch('https://reqres.in/api/users');
        await response.json();
        increment();
        console.log(developer);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [increment, developer]);
  return (
    <div>
      Esta es mi lista de usuarios
    </div>
  );
}

export default UsersAndCount;