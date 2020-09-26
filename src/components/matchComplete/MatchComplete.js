import React from "react";

export default function MatchComplete({ player1, player2, winner }) {
  return (
    <div className={"match-card__complete"}>
      <div>
        <p>{player1.name}</p>
        <p>{player1.score}</p>
      </div>
      <div>
        <p>{winner === 1 ? player1.name : player2.name} 🏅</p>
      </div>
      <div>
        <p>{player2.name}</p>
        <p>{player2.score}</p>
      </div>
    </div>
  );
}
