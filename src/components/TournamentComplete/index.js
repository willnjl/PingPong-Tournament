import React from "react";
import RoundResults from "../RoundResults";

export default function TournamentComplete({ game, record }) {
  const { player1, player2, winner } = game;
  return (
    <>
      <div className={"match-card__complete"}>
        <div>
          <p>{winner === 1 ? "🏅" : null}</p>
          <p>{player1.name}</p>
          <p>{player1.score}</p>
        </div>
        <div>
          <p>{winner === 2 ? "🏅" : null}</p>
          <p>{player2.name}</p>
          <p>{player2.score}</p>
        </div>
      </div>
      <RoundResults record={record} />
    </>
  );
}
