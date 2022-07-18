import useCounter from "../hooks/useCounter";
import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
