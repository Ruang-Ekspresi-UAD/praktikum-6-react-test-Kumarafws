//Kumara Fawwas Abhista
//2200016100 (C)

import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button data-testid="increment-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button data-testid="decrement-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button data-testid="reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export const Greeting = ({ name }) => {
  return <h1 data-testid="greeting">Hello, {name}</h1>;
};

export const AlertButton = ({ message }) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button data-testid="alert-button" onClick={handleClick}>
      Show Alert
    </button>
  );
};
