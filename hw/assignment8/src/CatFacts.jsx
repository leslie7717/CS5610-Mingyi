import React, { useState, useEffect } from "react";
import axios from "axios";
import CatLogo from "./assets/cat.svg";
import "./CatFacts.css";

// insert your name here
// Mingyi Gao

function CatFacts() {
  // you may need to add other code elsewhere!
  const [catFact, setCatFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function generateCatFact() {
    setIsLoading(true);
    axios.get("https://catfact.ninja/fact").then((response) => {
      // insert code here
      setCatFact(response.data.fact);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    generateCatFact();
  }, []);

  return (
    <div className="App">
      <div className="catFactsText">
        {isLoading ? "Loading..." : catFact}
        {/* The cat fact should be displayed here*/}
      </div>
      <div>
        <button onClick={generateCatFact} className="catFactBtn">
          Click me for a cat fact!
        </button>
      </div>
      <div>
        <img src={CatLogo} className="catFactImg" />
      </div>
    </div>
  );
}

export default CatFacts;
