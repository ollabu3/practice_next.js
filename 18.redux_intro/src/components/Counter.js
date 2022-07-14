import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT, FIVE, TOGGLE } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const { isVisible, counter } = useSelector((state) => state);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const fiveHandler = () => {
    dispatch({ type: FIVE, amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  console.log({ isVisible });
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
