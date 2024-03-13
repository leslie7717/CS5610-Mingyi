import React, { useState } from "react";
import Cell from "./Cell";

function Grid() {
  const [count, setCount] = useState(0);
  const [cells, setCells] = useState([false, false, false, false]);

  const toggleCell = (index) => {
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
    setCount(newCells.filter((isOn) => isOn).length);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 100px)",
          gridGap: "1px",
        }}
      >
        {cells.map((isOn, index) => (
          <Cell key={index} isOn={isOn} toggleCell={() => toggleCell(index)} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
