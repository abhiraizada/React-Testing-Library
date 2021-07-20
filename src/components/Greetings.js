import React from "react";
import { useState } from "react";
import Output from "./Output";
import Async from "./Async";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);
  const onChangeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>hello</h1>
      {/* <p>Greetings</p> */}
      {!changedText ? <Output>Greetings</Output> : <Output>Changed</Output>}

      <button onClick={onChangeHandler}>Change Text</button>
      <Async></Async>
    </div>
  );
};

export default Greetings;
