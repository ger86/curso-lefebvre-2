# Chuleta

React tiene componentes que definimos mediante funciones.

Renderizar un componente es lo mismo que ejecutar la función con unas propiedades.

## useState

Los componentes pueden recordar el estado anterior gracias al hook `useState`. 

```js
const [state, setState] = useState(initialValue);
```

Tenemos dos formas de actualizar el estado:

- setState(newState);

- setState(currentState => currentState + 1);

Cuando actualizamos el estado, forzamos un nuevo render.

## useEffect

Hay acciones que:

- O bien necesitan que el DOM esté pintado entero para realizar cálculos. Por ejemplo, obtener el valor del scroll actual.

- O bien tienen que ejecutarse sin bloquear el renderizado. Porque lo más importante **siempre** es pintar cuanto antes.

Un efecto se declara de la siguiente forma:

```js
useEffect(function() {
    // defino el efecto
});
```

Un efecto siempre se ejecuta tras el renderizado del componente.

Puede que no siempre quiera ejecutar un efecto. Por ejemplo. Si ya tengo la lista de usuarios, no quiero volver a recuperarla en cada render porque es malgastar los recursos del navegador. 

### useEffect admite un array de dependencias como segundo argumento

- Si el segundo argumento está omitido: el efecto siempre se ejecuta tras el render.

```js
function MyComponent() {
    const [state, setState] = useState(0);

    useEffect(function() {
        console.log('hola');
    });

    return <button onClick={() => setState(state + 1)}>Incrementar</button>
}
```

Cada vez que yo pulse el botón, fuerzo un nuevo render y tras él, el efecto se ejecuta porque no tiene dependencias. 

- Si el segundo argumento es un array con elementos: el efecto se ejecuta cuando cambia uno de esos elementos. Si todos los elementos son iguales en cada render, el efecto no se ejecuta. 

```js
function MyComponent() {
    const [state, setState] = useState(0);

    useEffect(function() {
        console.log(state);
    }, [state]);

    return <button onClick={() => setState(state + 1)}>Incrementar</button>
}
```

En este caso, el efecto se va a ejecutar siempre y cuando state haya cambiado de valor con respecto al render anterior.

- Finalmente, si el array está vacío, entonces el efecto sólo se ejecuta una vez: tras el primer render. 

```js
function MyComponent() {
    useEffect(function() {
        fetch('https://....')
    }, []);

    return <p>Hola mundo</p>
}
```

Al estar el array vacío, no hay nada que pueda cambiar para que el efecto vuelva a ejecutarse. 

### useEffect puede limpiar "cosas" que haya dejado puestas en la aplicación

Este efecto, pone un event listener tras cada render. Si no lo limpio, cada vez que se ejecute el efecto, añado un nuevo event listener y por tanto, si hago 2 scrolls, tendré puestos 2 event listeners y si hago 1.000 habrá 1.000 event listeners escuchando = ¡KABOOOM! de la aplicación.

```js
export default function useScroll(fn) {
  useEffect(function() {
    window.addEventListener('scroll', fn);
    return function cleanUp() {
      window.removeEventListener('scroll', fn);
    };
  }, [fn]);
}
```

## useMemo y useCallback

Son hooks que me permiten "memorizar" valores y funciones para que en cada render obtenga siempre el mismo valor. 

Aquí uso `useCallback` para devolver siempre la misma función `increment` independentiemente del render en el que esté.

> El hook `useState` siempre devuelve funciones ya memorizadas.

```js
import {useCallback, useState} from 'react';

export default function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(function() {
    setCount(count => count + 1); 
  }, [setCount]);

  return [count, increment];
}
```

¿Qué ventaja tiene esto? 

- Poderlo usar en las dependencias del hook `useEffect`. 

- Ayudar a React a no renderizar de más gracias a que con React.memo envolviendo a un componente podemos decirle a React que no lo renderice salvo que cambien sus propiedades.

```js
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
```





