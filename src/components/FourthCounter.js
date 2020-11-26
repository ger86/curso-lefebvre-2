import React from 'react';
import PropTypes from 'prop-types';
import useCount from 'hooks/useCount';

function FourthCounter() {
  const [count, increment, noMemoizedIncrement] = useCount(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <FourthCounterView onClick={increment} message="primero" />
      <FourthCounterView onClick={noMemoizedIncrement} message="segundo" />
    </div>
  );
}

const FourthCounterView = React.memo(({onClick, message}) => {
  console.log(message);
  return (
    <button onClick={onClick}>¡Púlsame!</button>
  );
});

FourthCounterView.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default FourthCounter;