import React from "react";
import Setup from "../setup";
import Game from "../game";
import "../../styles/main.scss";

function App({ count, setup, games }) {
  return (
    <div className={"main"}>
      <h1>{count}</h1>
      {!setup ? (
        <Setup />
      ) : (
        games.map((game, i) => {
          return <Game gameId={i} />;
        })
      )}
    </div>
  );
}

export default App;
