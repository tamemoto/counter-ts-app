import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, decrement, increment } from 'store/actions';
import { CounterState } from 'store/reducer';

import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterBoard;
