import React from "react";
import RoundTitle from "../RoundTitle";
import Game from "../game";
import RoundResults from "../RoundResults";
export default function Round({ roundsRemaining, games, roundFin, record }) {
  return !roundFin ? (
    <div>
      <RoundTitle roundsRemaining={roundsRemaining} />
      {games.map((_, i) => {
        return <Game gameId={i} />;
      })}
    </div>
  ) : (
    <RoundResults record={record} />
  );
}
