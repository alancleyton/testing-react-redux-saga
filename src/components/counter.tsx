import React from 'react';
import { useSelector } from '../hooks/useSelector';

const Counter = (): JSX.Element => {
  const { count } = useSelector(state => state.counter);

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default Counter;
