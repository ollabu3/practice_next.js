import React, { useCallback, useState, useMemo } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import Output from "./components/demo/Output";
import List from "./components/demo/List";

function App() {
  console.log("APP");
  const [listTitle, setListTitle] = useState("My List");
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changeTitleHandler = useCallback(() => {
    console.log("changeTitleHandler");
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <List title={listTitle} items={listItems} />
      <div>
        <Button onClick={changeTitleHandler}>Change List Title</Button>
      </div>
    </div>
  );
}

export default App;
