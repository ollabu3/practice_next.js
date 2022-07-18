import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import Output from "./components/demo/Output";

function App() {
  console.log("APP");
  const [show, setShow] = useState(false);

  const handleToggleBtn =
    (() => {
      setShow((show) => !show);
    },
    []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Output show={show} />
      <Button onClick={handleToggleBtn}>TOGGLE</Button>
    </div>
  );
}

export default App;
