import React, {useState} from 'react';
import PropTypes from 'prop-types';

Paginator.propTypes = {
  totalPages: PropTypes.number.isRequired,
  withExtraButtons: PropTypes.bool,
  onChangePage: PropTypes.func.isRequired
};

Paginator.defaultProps = {
  withExtraButtons: false
};

function Paginator({totalPages, withExtraButtons, onChangePage}) {
  const [page, setPage] = useState(1);

  function gotoNextPage() {
    setPage(page => page + 1);
    onChangePage(page + 1);
  }

  function gotoPreviousPage() {
    setPage(page => page - 1);
    onChangePage(page - 1);
  }

  function gotoPageN(page) {
    setPage(page);
    onChangePage(page);
  }

  const pages = [...Array(totalPages).keys()];
  return (
    <div>
      {page > 1 && <button onClick={gotoPreviousPage}>Retroceder</button>}
      {withExtraButtons &&
        pages.map((page, index) => (
          <button key={index} onClick={() => gotoPageN(index + 1)}>
            Ir a la página {index + 1}
          </button>
        ))}
      {page <= totalPages && <button onClick={gotoNextPage}>Avanzar</button>}
    </div>
  );
}

export default Paginator;
