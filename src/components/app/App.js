import React from "react";
import Setup from "../setup";

function App({ count }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <Setup />
      </header>
    </div>
  );
}

export default App;
