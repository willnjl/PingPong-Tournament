import React from "react";
import Setup from "../setup";
import Game from "../game";
import "../../styles/main.scss";
import RoundResults from "../RoundResults";
import RoundTitle from "../RoundTitle";
import Final from "../Final";
import TournamentComplete from "../TournamentComplete";

function App({ setup, games, roundFin, roundsRemaining, record }) {
  return (
    <div className={"main"}>
      {!roundFin ? (
        !setup ? (
          <Setup />
        ) : roundsRemaining > 0 ? (
          <>
            <RoundTitle roundsRemaining={roundsRemaining} />
            {games.map((_, i) => {
              return <Game gameId={i} />;
            })}
          </>
        ) : (
          <>
            <RoundTitle roundsRemaining={roundsRemaining} />
            <Final />
          </>
        )
      ) : roundsRemaining > 0 ? (
        <RoundResults record={record} />
      ) : (
        <TournamentComplete game={games[0]} record={record} />
      )}
    </div>
  );
}

export default App;
