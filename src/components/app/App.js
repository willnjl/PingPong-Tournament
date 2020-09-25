import React from "react";
import Setup from "../setup";
import Game from "../game";

function App({ count, setup, games }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        {!setup ? (
          <Setup />
        ) : (
          games.map((game, i) => {
            return <Game gameId={i} />;
          })
        )}
      </header>
    </div>
  );
}

export default App;
