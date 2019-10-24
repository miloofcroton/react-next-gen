import React from 'react';
import { useSelector } from 'react-redux';
import Clock from './Clock';
import Counter from './Counter';
import { getLastUpdate, getLight } from '../data/selectors';

export default () => {
  const lastUpdate = useSelector(getLastUpdate);
  const light = useSelector(getLight);

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  );
};
