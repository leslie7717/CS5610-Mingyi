import React from "react";
import "./App.css";
import Grid from "./Grid"; // Make sure to import the Grid component

function App() {
  return (
    <div className="App">
      {/* Remove the header and other content that came with create-react-app */}
      {/* Include the Grid component so it renders on the page */}
      <Grid />
    </div>
  );
}

export default App;
