import React, {useEffect, useState} from 'react';

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
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);

  useEffect(function() {
    function onScroll() {
      setCurrentScroll(window.scrollY);
    } 
    window.addEventListener('scroll', onScroll);
    return function cleanUp() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
      <div style={style}>Scroll: {currentScroll}</div>
  );  
}

export default SpyScroll;