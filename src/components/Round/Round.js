import React from "react";
import RoundTitle from "./RoundTitle";
import Match from "../Match";
import RoundResults from "./RoundResults";
export default function Round({ roundsRemaining, games, roundFin, record }) {
  return !roundFin ? (
    <div>
      <RoundTitle roundsRemaining={roundsRemaining} />
      {games.map((game) => {
        return <Match key={game.id} gameId={game.id} />;
      })}
    </div>
  ) : (
    <RoundResults record={record} />
  );
}
