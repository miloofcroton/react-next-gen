import React from 'react';
import { useSelector } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../data/actions';
import { getCount } from '../data/selectors';
import { useAnyDispatch } from 'store';

export default () => {
  const count = useSelector(getCount);
  const dispatch = useAnyDispatch();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
};
