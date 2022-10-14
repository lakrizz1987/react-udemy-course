import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterSliceActions } from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterSliceActions.increment())
  };

  const increaseHandler = (e) => {

    dispatch(counterSliceActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterSliceActions.decrement())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
