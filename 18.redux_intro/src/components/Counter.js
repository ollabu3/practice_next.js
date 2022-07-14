import { useSelector, useDispatch } from "react-redux";
import { countActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const { isVisible, counter } = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch(countActions.increment());
  };

  const fiveHandler = () => {
    dispatch(countActions.five(10));
  };

  const decrementHandler = () => {
    dispatch(countActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(countActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={fiveHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
