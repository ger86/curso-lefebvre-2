import React from 'react';
import useScroll from 'hooks/useScroll';

const style = {
  position: 'fixed',
  bottom: 0,
  right: 0,
  background: 'blue',
  padding: '32px',
  textAlign: 'center',
  fontSize: '32px',
  color: 'white',
  fontWeight: 'bold'
};


function SpyScroll() {
  useScroll(() => alert('hola'));
  return (
      <div>Este es mi componente</div>
  );  
}

export default SpyScroll;