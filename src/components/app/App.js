import React from "react";
import Setup from "../setup";
import Game from "../game";
import "../../styles/main.scss";
import RoundResults from "../RoundResults";

function App({ count, setup, games, roundFin }) {
  return (
    <div className={"main"}>
      {!roundFin ? (
        !setup ? (
          <Setup />
        ) : (
          games.map((game, i) => {
            return <Game gameId={i} />;
          })
        )
      ) : (
        <RoundResults />
      )}
    </div>
  );
}

export default App;
