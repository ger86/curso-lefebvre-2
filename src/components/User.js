import React from 'react';
import useFetch from 'hooks/useFetch';

function User() {
  const url = `https://reqres.in/api/users/1`;
  const json = useFetch(url);

  if (!json) {
    return <p>Todavía no hay usuarios</p>;
  }

  return (
    <div>
      {json.data.first_name}
    </div>
  );
}

export default User;