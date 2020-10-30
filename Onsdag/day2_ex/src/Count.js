import React, { useEffect, useState } from "react";
import "./App.css";

function Count(props) {
  const { initialCount, inc } = props;

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );

  function Reset() {
    setCount(0);
  }

  function Increment() {
    setCount(count + inc);
  }

  function Decrement() {
    setCount(count - inc);
  }
}

export default Count;
