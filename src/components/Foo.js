import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export default function Foo() {
  const [page, setPage] = useState(0);

  function callback(page) {
    setPage(page);
  }

  function myLog() {
    console.log('Render');
  }

  return (
    <div>
      Página seleccionada: {page}
      <MyComponent callback={callback} myLog={myLog} page={page} />
    </div>
  );
}

function MyComponent({callback, myLog, page}) {
  useEffect(
    function() {
      myLog();
    },
    [myLog]
  );

  function changePage(event) {
    callback(event.target.value);
  }

  return (
    <div>
      <input onChange={changePage} value={page} />
    </div>
  );
}

MyComponent.propTypes = {
  callback: PropTypes.func.isRequired,
  myLog: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};
