/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import Paginator from 'components/Paginator';

function Users() {
  const [page, setPage] = useState(1);
  const [json, setJson] = useState(null);

  const url = `https://reqres.in/api/users?page=${page}`;

  useEffect(
    function() {
      async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setJson(json);
      }
      fetchData();
    },
    [url]
  );

  const onChangePage = function(page) {
    setPage(page);
  };

  if (!json) {
    return <p>Todavía no hay usuarios</p>;
  }

  return (
    <div>
      <h2>Usuarios de la página {page}</h2>
      <ul>
        {json.data.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
      <Paginator
        totalPages={json.total_pages}
        withExtraButtons
        onChangePage={onChangePage}
      />
    </div>
  );
}

export default Users;
