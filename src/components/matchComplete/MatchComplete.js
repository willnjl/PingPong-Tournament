import React from "react";

export default function MatchComplete({ player1, player2, winner }) {
  return (
    <div className={"card__complete"}>
      <div>
        <h3>{player1.name}</h3>
        <h3>{player1.score}</h3>
      </div>
      <div>
        <h3>{player2.name}</h3>
        <h3>{player2.score}</h3>
      </div>
    </div>
  );
}
