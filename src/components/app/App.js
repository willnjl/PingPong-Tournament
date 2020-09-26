import React from "react";
import Form from "../Form";
import Game from "../game";
import "../../styles/main.scss";
import RoundResults from "../RoundResults";
import RoundTitle from "../RoundTitle";
import Final from "../Final";
import TournamentComplete from "../TournamentComplete";

function App({ setup, games, roundFin, roundsRemaining, record }) {
  return (
    <div className={"page-wrapper"}>
      <header className={"header"}>
        <h1 className={"title"}>Ping Pong Tournament</h1>
      </header>
      <div className={"main"}>
        {!roundFin ? (
          !setup ? (
            <Form />
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
    </div>
  );
}

export default App;
