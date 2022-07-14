import { createStore } from "redux";

const counterState = { counter: 0, isVisible: true };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const FIVE = "FIVE";
const TOGGLE = "TOGGLE";

const countReducer = (state = counterState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === FIVE) {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === TOGGLE) {
    return {
      ...state,
      isVisible: !state.isVisible,
    };
  }
  return state;
};

const store = createStore(countReducer);

export default store;
