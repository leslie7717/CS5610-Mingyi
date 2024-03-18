import React, { useState, useEffect } from "react";

export function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("value changed");
  }, [count]);

  function onClickPlus() {
    setCount(count + 1);
  }
  function onClickClear() {
    setCount(0);
  }

  return (
    <div>
      <h1> Counter: {count} </h1>
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickClear}>Clear</button>
    </div>
  );
}
