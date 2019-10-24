import React, { useState, useEffect } from 'react';

function Counter() {

  const [count, setCount] = useState(() =>
    Number(window.localStorage.getItem('count') || 0),
  );

  const incrementCount = () => setCount((c) => c + 1);
  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);

  return <button onClick={incrementCount}>{count}</button>;
}

export default Counter;
