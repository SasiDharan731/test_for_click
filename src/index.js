import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const handleMouseDown = () => {
    console.log("mouse down");
  };
  const handleMouseUp= () => {
    console.log("mouse up");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <svg height="100" width="100" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="3"
          fill="red"
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
