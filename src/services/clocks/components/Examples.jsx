import React from 'react';
import { useSelector } from 'react-redux';
import Clock from './Clock';
import Counter from './Counter';

export default () => {
  const lastUpdate = useSelector((state) => state.lastUpdate);
  const light = useSelector((state) => state.light);

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  );
};
