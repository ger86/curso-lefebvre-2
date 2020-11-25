import {useEffect, useState} from 'react';

export default function useFetch(url) {
  const [json, setJson] = useState(null);

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

  return json;
}