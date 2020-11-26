/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import Paginator from 'components/Paginator';
import useFetch from 'hooks/useFetch';

function Users() {
  const [page, setPage] = useState(1);
  const url = `https://reqres.in/api/users?page=${page}`;
  const fetchState = useFetch(url);

  const onChangePage = function(page) {
    setPage(page);
  };

  if (fetchState.state === 'loading') {
    return <p>Cargando lista de usuarios</p>;
  }

  if (fetchState.state === 'error') {
    return <p>{fetchState.error.message}</p>;
  }

  return (
    <div>
      <h2>Usuarios de la página {page}</h2>
      <ul>
        {fetchState.data.data.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
      <Paginator
        totalPages={fetchState.data.total_pages}
        withExtraButtons
        onChangePage={onChangePage}
      />
    </div>
  );
}

export default Users;
