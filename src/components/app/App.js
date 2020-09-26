import React from "react";
import Setup from "../setup";
import Game from "../game";
import "../../styles/main.scss";
import RoundResults from "../RoundResults";
import RoundTitle from "../RoundTitle";

function App({ count, setup, games, roundFin, roundsRemaining }) {
  return (
    <div className={"main"}>
      {!roundFin ? (
        !setup ? (
          <Setup />
        ) : (
          <>
            <RoundTitle roundsRemaining={roundsRemaining} />
            {games.map((game, i) => {
              return <Game gameId={i} />;
            })}
          </>
        )
      ) : (
        <RoundResults />
      )}
    </div>
  );
}

export default App;
