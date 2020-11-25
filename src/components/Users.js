/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';

function Users() {
  const [users, setUsers] = useState(null);

  useEffect(async function() {
    const response = await fetch('https://reqres.in/api/users');
    const json = await response.json();
    setUsers(json.data);
  }, []);

  if (!users) {
    return <p>Todavía no hay usuarios</p>;
  }

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
