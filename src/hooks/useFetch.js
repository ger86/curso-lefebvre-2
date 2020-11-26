import {useEffect, useState} from 'react';

const initialState = {
  state: 'loading',
  data: null,
  error: null
};

export default function useFetch(url) {
  const [fetchState, setFetchState] = useState(initialState);

  useEffect(
    function() {
      setFetchState(initialState);
      async function fetchData() {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            setFetchState({
              state: 'success',
              error: null,
              data: json
            });
          } else {
            setFetchState({
              state: 'error',
              error: new Error(`La petición falló con código de error: ${response.status}`),
              data: null
            });
          }
        } catch (error) {
          setFetchState({
            state: 'error',
            error: error,
            data: null
          });
        }
      }
      setTimeout(fetchData, 3000);
    },
    [url]
  );

  return fetchState;
}
