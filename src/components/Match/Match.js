import React from "react";
import MatchComplete from "./MatchComplete";
import Player from "../Player/Player";

export default function Game({ game, handleScore }) {
  const { player1, player2, winner, player1Serving } = game;

  return (
    <>
      {winner === 0 ? (
        <div className={"match-card"}>
          <Player
            player={player1}
            handleScore={handleScore}
            gameId={game.id}
            serving={player1Serving}
          />

          <Player
            player={player2}
            handleScore={handleScore}
            gameId={game.id}
            serving={!player1Serving}
          />
        </div>
      ) : (
        <MatchComplete player1={player1} player2={player2} winner={winner} />
      )}
    </>
  );
}
