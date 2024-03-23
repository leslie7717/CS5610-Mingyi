import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import "./GameOfLife.css";

const GameOfLife = () => {
  const [numRows, setNumRows] = useState(20);
  const [numCols, setNumCols] = useState(20);
  const [grid, setGrid] = useState([]);
  const [livingCells, setLivingCells] = useState(0);
  const [heightError, setHeightError] = useState("");
  const [tempRows, setTempRows] = useState(numRows);
  const [tempCols, setTempCols] = useState(numCols);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  useEffect(() => {
    initializeGrid();
  }, []);

  useEffect(() => {
    countLivingCells();
  }, [grid]);

  useEffect(() => {
    initializeGrid();
  }, [numRows, numCols]);

  const initializeGrid = () => {
    if (numRows > 0 && numCols > 0) {
      const newGrid = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => (Math.random() < 0.05 ? 1 : 0))
      );
      setGrid(newGrid);
    }
  };

  const toggleCell = (i, j) => {
    const newGrid = [...grid];
    newGrid[i][j] = newGrid[i][j] ? 0 : 1;
    setGrid(newGrid);
  };

  const countLivingCells = () => {
    let count = 0;
    grid.forEach((row) => {
      row.forEach((cell) => {
        if (cell) count++;
      });
    });
    setLivingCells(count);
  };

  const resetGrid = () => {
    setNumRows(20);
    setNumCols(20);
    setTempCols(20);
    setTempRows(20);
    setHeightError("");
    initializeGrid();
  };

  const stepSimulation = () => {
    const newGrid = [];
    for (let i = 0; i < numRows; i++) {
      const newRow = [];
      for (let j = 0; j < numCols; j++) {
        const neighbors = countNeighbors(i, j);
        if (grid[i][j] === 1) {
          if (neighbors < 2 || neighbors > 3) {
            newRow.push(0); // Rule 1 and Rule 3
          } else {
            newRow.push(1); // Rule 2
          }
        } else {
          if (neighbors === 3) {
            newRow.push(1); // Rule 4
          } else {
            newRow.push(0);
          }
        }
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };

  const countNeighbors = (i, j) => {
    const offsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    let count = 0;
    offsets.forEach(([dx, dy]) => {
      const ni = i + dx;
      const nj = j + dy;
      if (
        ni >= 0 &&
        ni < numRows &&
        nj >= 0 &&
        nj < numCols &&
        grid[ni][nj] === 1
      ) {
        count++;
      }
    });
    return count;
  };

  const handleInputChange = (e, setter) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 3 && value <= 40) {
      setter(value);
      setHeightError("");
    } else {
      setHeightError("Please enter a number between 3 and 40");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputChange({ target: { value: tempRows } }, setNumRows);
      handleInputChange({ target: { value: tempCols } }, setNumCols);
      initializeGrid();
    }
  };

  const handleAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    } else {
      const interval = setInterval(stepSimulation, 2000);
      setAutoplayInterval(interval);
    }
  };

  return (
    <div className="game-container">
      <div className="grid-info">
        <span>Living Cells: {livingCells}</span>
        <div>
          <p>Set the number of rows and columns, then hit 'Enter'.</p>
          <div className="inputs">
            <span>Number of rows:</span>
            <input
              type="number"
              value={tempRows}
              onChange={(e) => handleInputChange(e, setTempRows)}
              onKeyDown={handleKeyDown}
            />
            <span>Number of columns:</span>
            <input
              type="number"
              value={tempCols}
              onChange={(e) => handleInputChange(e, setTempCols)}
              onKeyDown={handleKeyDown}
            />
          </div>
          {heightError && <div className="error">{heightError}</div>}
        </div>
        <button onClick={resetGrid}>Reset Grid</button>
        <button onClick={stepSimulation}>Step</button>
        <button onClick={handleAutoplay}>
          {autoplayInterval ? "Stop Autoplay" : "Start Autoplay"}
        </button>
      </div>
      <Grid grid={grid} toggleCell={toggleCell} />
    </div>
  );
};

export default GameOfLife;
