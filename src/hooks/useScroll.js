import {useEffect} from 'react';

export default function useScroll(fn) {
  useEffect(function() {
    window.addEventListener('scroll', fn);
    return function cleanUp() {
      window.removeEventListener('scroll', fn);
    };
  }, [fn]);
}