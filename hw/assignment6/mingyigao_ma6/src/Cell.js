import React, { useState } from "react";

function Cell({ toggleCell, isOn }) {
  const handleClick = () => {
    toggleCell();
  };

  const style = {
    width: "100px",
    height: "100px",
    border: "1px solid grey",
    backgroundColor: isOn ? "black" : "white",
  };

  return <div style={style} onClick={handleClick}></div>;
}

export default Cell;
