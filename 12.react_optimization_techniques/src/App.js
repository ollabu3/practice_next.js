import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import Output from "./components/demo/Output";

function App() {
  console.log("APP");
  const [show, setShow] = useState(false);
  const [allowShow, setAllowShow] = useState(false);

  const handleToggleBtn = useCallback(() => {
    console.log("handleToggleBtn");
    if (allowShow) {
      console.log("inner");
      setShow((show) => !show);
    }
  }, [allowShow]);

  const allowToggleHandler = () => {
    console.log("allowToggleHandler");
    setAllowShow((allowShow) => !allowShow);
  };
  console.log({ show });
  console.log({ allowShow });

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Output show={show} />
      <div>
        <Button onClick={allowToggleHandler}>ALLOW TOGGLE</Button>
      </div>
      <div>
        <Button onClick={handleToggleBtn}>TOGGLE</Button>
      </div>
    </div>
  );
}

export default App;
