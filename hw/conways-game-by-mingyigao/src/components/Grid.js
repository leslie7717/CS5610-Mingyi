import React from "react";
import "./Grid.css";

const Grid = ({ grid, toggleCell }) => {
  return (
    <div className="grid">
      {grid.length > 0 &&
        grid.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`cell ${cell ? "alive" : "dead"}`}
                onClick={() => toggleCell(i, j)}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default Grid;
